import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  sortedBardChartData = [
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
  ];

  ngOnInit() {

  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
