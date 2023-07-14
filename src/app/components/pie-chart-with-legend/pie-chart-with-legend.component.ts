import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_material);

@Component({
  selector: 'app-pie-chart-with-legend',
  templateUrl: './pie-chart-with-legend.component.html',
  styleUrls: ['./pie-chart-with-legend.component.scss']
})

export class PieChartWithLegendComponent {

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
      let chart = am4core.create("pie-chart-with-legend-container", am4charts.PieChart);

      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "% of trade";
      pieSeries.dataFields.category = "product";

      // Let's cut a hole in our Pie chart the size of 30% the radius
      chart.innerRadius = am4core.percent(30);

      // Put a thick white border around each Slice
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      pieSeries.slices.template
        // change the cursor on hover to make it apparent the object can be interacted with
        .cursorOverStyle = [
          {
            "property": "cursor",
            "value": "pointer"
          }
        ];

      pieSeries.alignLabels = false;
      pieSeries.labels.template.bent = true;
      pieSeries.labels.template.radius = 3;
      pieSeries.labels.template.fontSize = 11;
      pieSeries.labels.template.padding(0,0,0,0);

      pieSeries.ticks.template.disabled = true;

      // Create a base filter effect (as if it's not there) for the hover to return to
      let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
      shadow.opacity = 0;

      // Create hover state
      let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

      // Slightly shift the shadow and make it more prominent on hover
      let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
      hoverShadow.opacity = 0.7;
      hoverShadow.blur = 5;

      // Add a legend
      chart.legend = new am4charts.Legend();
      chart.legend.disabled = true;
      
      
      const listData1 = [
        {
          "product": "Bills of Exchange",
          "% of trade": 50
        },{
           "product": "Performance Guarantees",
          "% of trade": 45
        }, {
           "product": "Financial guarantees",
          "% of trade": 40
        }, {
          "product": "others",
          "% of trade": 25
        }
    ];

    const listData2 = [
        {
          "product": "Letter Of Credits",
          "% of trade": 150
        },{
           "product": "Loans",
          "% of trade": 40
        }, {
           "product": "Performance Gurantees",
          "% of trade": 200
        }, {
          "product": "others",
          "% of trade": 10
        }
    ];

    const listData3 = [
        {
          "product": "Loans",
          "% of trade": 30
        },{
           "product": "Letter Of Credits",
          "% of trade": 50
        }, {
           "product": "Performance Guarantees",
          "% of trade": 60
        }, {
          "product": "others",
          "% of trade": 20
        }
    ];

    document.getElementById('mapDropdown').addEventListener('change', function (e:any) {
      if(chart.data == listData1){
        chart.data = listData2;
      }
      else if(chart.data == listData2){
        chart.data = listData3;
      }
      else if(chart.data == listData3){
        chart.data = listData1;
      }
      chart.invalidateData();
    });

    chart.data = listData1;

    });
  }
}
