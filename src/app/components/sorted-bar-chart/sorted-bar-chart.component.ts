import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-sorted-bar-chart',
  templateUrl: './sorted-bar-chart.component.html',
  styleUrls: ['./sorted-bar-chart.component.scss']
})

export class SortedBarChartComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {

    this.browserOnly(() => {
      let chart = am4core.create("sorted-chart-container", am4charts.XYChart);
      chart.padding(4, 4, 4, 4);
      
      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "network";
      categoryAxis.renderer.minGridDistance = 1;
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.disabled = true;
      
      let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryY = "network";
      series.dataFields.valueX = "MAU";
      series.tooltipText = "{valueX.value}"
      series.columns.template.strokeOpacity = 0;
      series.columns.template.column.cornerRadiusBottomRight = 5;
      series.columns.template.column.cornerRadiusTopRight = 5;
      
      let labelBullet = series.bullets.push(new am4charts.LabelBullet())
      labelBullet.label.horizontalCenter = "left";
      labelBullet.label.dx = 10;
      labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
      labelBullet.locationX = 1;
      
      // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
      series.columns.template.adapter.add("fill", function(fill, target){
        return chart.colors.getIndex(target.dataItem!.index);
      });
      
      categoryAxis.sortBySeries = series;
        chart.data = [
            {
                "network": "Lithuania",
                "MAU": 2255
            },
            {
                "network": "Belgium",
                "MAU": 4300
            },
            {
                "network": "The Netherlands",
                "MAU": 1000
            },
            {
                "network": "Germany",
                "MAU": 2465
            },
            {
                "network": "UK",
                "MAU": 3550
            },
            {
                "network": "Ireland",
                "MAU": 5000
            },
            {
                "network": "Australia",
                "MAU": 5000
            },
            {
                "network": "Czech Republic",
                "MAU": 5000
            }
        ]
    });
  }
}
