import {Component, Inject, Input, NgZone, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_material);

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

        chart.colors.list = [
            am4core.color("#92C5DC"),
            am4core.color("#A8DCF3"),
            am4core.color("#9298DD"),
            am4core.color("#A37CC7"),
            am4core.color("#B992DD") ,
            am4core.color("#DD91D4"),
            am4core.color("#C67BBD"),
            am4core.color("#C67B91"),
        ];
      
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

      const sortedBardChartData1 = [
        {
            "network": "India",
            "MAU": 2755
        },
        {
            "network": "USA",
            "MAU": 8700
        },
        {
            "network": "China",
            "MAU": 4050
        },
        {
            "network": "South Africa",
            "MAU": 2965
        },
        {
            "network": "Saudi Arabia",
            "MAU": 1500
        },
        {
            "network": "Germany",
            "MAU": 6500
        },
        {
            "network": "Brazil",
            "MAU": 2740
        }
    ];

    const sortedBardChartData2 = [
        {
            "network": "India",
            "MAU": 6353
        },
        {
            "network": "USA",
            "MAU": 9546
        },
        {
            "network": "China",
            "MAU": 4536
        },
        {
            "network": "South Africa",
            "MAU": 5362
        },
        {
            "network": "Saudi Arabia",
            "MAU": 3526
        },
        {
            "network": "Germany",
            "MAU": 7635
        },
        {
            "network": "Brazil",
            "MAU": 5373
        }
    ];

    const sortedBardChartData3 = [
      {
          "network": "India",
          "MAU": 1253
      },
      {
          "network": "USA",
          "MAU": 7463
      },
      {
          "network": "China",
          "MAU": 2373
      },
      {
          "network": "South Africa",
          "MAU": 7463
      },
      {
          "network": "Saudi Arabia",
          "MAU": 3432
      },
      {
          "network": "Germany",
          "MAU": 4353
      },
      {
          "network": "Brazil",
          "MAU": 2454
      }
  ];
      
      categoryAxis.sortBySeries = series;
      let i = 1;
      document.getElementById('mapDropdown').addEventListener('change', function (e:any) {
        if(i == 1){
          chart.data = sortedBardChartData2;
          i = 2;
        }
        else if(i == 2){
          chart.data = sortedBardChartData3;
          i = 3;
        }
        else if(i == 3){
          chart.data = sortedBardChartData1;
          i = 1;
        }
        chart.invalidateData();
      });
  
      chart.data = sortedBardChartData1;
  
      });

  }
}
