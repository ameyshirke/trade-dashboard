import {Component, OnInit} from '@angular/core';
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
    originCities: any;

    yearByCitiesMap = new Map();

    ngOnInit(): void {
        this.originCities = this.originCities1;
        this.yearByCitiesMap.set("2012",this.originCities1 );
        this.yearByCitiesMap.set("2013",this.originCities2 );
        this.yearByCitiesMap.set("2014",this.originCities3 );
    }

    destinationCities = [
        {
            "id": "australia",
            "title": "Australia",
            "latitude": -23.6896,
            "longitude": 133.2799,
        },
        {
            "id": "japan",
            "title": "Japan",
            "latitude": 36.6896,
            "longitude": 138.2799,
        },
        {
            "id": "russia",
            "title": "Russia",
            "latitude": 63.6896,
            "longitude": 95.2799,
        },
        {
            "id": "sweden",
            "title": "Sweden",
            "latitude": 63.6896,
            "longitude": 16.2799,
        },
        {
            "id": "guinea",
            "title": "Guinea",
            "latitude": 13.6896,
            "longitude": -14.2799,
        },
        {
            "id": "stockholm",
            "title": "Stockholm",
            "latitude": 59.3328,
            "longitude": 18.0645
        },
        {
            "id": "bern",
            "title": "Bern",
            "latitude": 46.9480,
            "longitude": 7.4481
        },
        {
            "id": "kiev",
            "title": "Kiev",
            "latitude": 50.4422,
            "longitude": 30.5367
        },
        {
            "id": "paris",
            "title": "Paris",
            "latitude": 48.8567,
            "longitude": 2.3510
        },
        {
            "id": "indonesia",
            "title": "Indonesia",
            "latitude": -1.8567,
            "longitude": 113.3510
        },
        {
            "id": "malaysia",
            "title": "Malaysia",
            "latitude": 4.8567,
            "longitude": 102.3510
        },
        {
            "id": "philippines",
            "title": "Philippines",
            "latitude": 8.8567,
            "longitude": 125.3510
        },
        {
            "id": "namibia",
            "title": "Namibia",
            "latitude": -21.8567,
            "longitude": 16.3510
        },
        {
            "id": "chile",
            "title": "Chile",
            "latitude": -34.8567,
            "longitude": -71.3510
        },
        {
            "id": "peru",
            "title": "Peru",
            "latitude": -10.8567,
            "longitude": -74.3510
        }

    ];


    originCities1 = [{
        "id": "germany",
        "title": "Germany",
        "destinations": ["usa", "india", "china", "southafrica", "saudiarabia", "brazil", "indonesia", "japan", "russia"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 15.4492,
        "zoomLatitude": 50.2631,
        "latitude": 51.1657,
        "longitude": 10.4515
    }, {
        "id": "usa",
        "title": "USA",
        "destinations": ["germany", "india", "chile", "southafrica", "saudiarabia", "brazil", "guinea", "sweden"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 13.4492,
        "zoomLatitude": 53.2631,
        "latitude": 40.5602,
        "longitude": -74.7129
    }, {
        "id": "india",
        "title": "India",
        "destinations": ["usa", "germany", "china", "southafrica", "saudiarabia", "brazil", "russia", "australia", "peru"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 16.4492,
        "zoomLatitude": 54.2631,
        "latitude": 20.5937,
        "longitude": 78.9629
    }, {
        "id": "china",
        "title": "China",
        "destinations": ["australia", "india", "germany", "southafrica", "saudiarabia", "brazil", "sweden", "russia", "japan", "chile"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 14.4492,
        "zoomLatitude": 53.2631,
        "latitude": 35.8617,
        "longitude": 104.1954
    }, {
        "id": "brazil",
        "title": "Brazil",
        "destinations": ["usa", "india", "china", "germany", "saudiarabia", "southafrica", "malaysia", "indonesia", "russia"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 13.4492,
        "zoomLatitude": 48.2631,
        "latitude": -16.2650,
        "longitude": -50.3553
    }, {
        "id": "saudiarabia",
        "title": "Saudi Arabia",
        "destinations": ["usa", "india", "china", "southafrica", "germany", "brazil", "kiev", "sweden", "phillipines"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 14.46492,
        "zoomLatitude": 48.4631,
        "latitude": 25.5595,
        "longitude": 44.9375
    }, {
        "id": "southafrica",
        "title": "South Africa",
        "destinations": ["usa", "india", "china", "germany", "saudiarabia", "brazil", "kiev", "russia", "chile", "australia"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 16.4492,
        "zoomLatitude": 48.2631,
        "latitude": -30.5595,
        "longitude": 22.9375
    }];

    originCities2 = [{
        "id": "germany",
        "title": "Germany",
        "destinations": ["usa", "india", "china", "saudiarabia", "brazil", "japan", "australia","russia","sweden"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 15.4492,
        "zoomLatitude": 50.2631,
        "latitude": 51.1657,
        "longitude": 10.4515
    }, {
        "id": "usa",
        "title": "USA",
        "destinations": ["germany", "india", "chile", "southafrica", "saudiarabia", "mongolia", "newzealand", "madagascar"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 13.4492,
        "zoomLatitude": 53.2631,
        "latitude": 40.5602,
        "longitude": -74.7129
    }, {
        "id": "india",
        "title": "India",
        "destinations": ["usa", "germany", "china", "brazil", "ukraine", "france", "indonesia"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 16.4492,
        "zoomLatitude": 54.2631,
        "latitude": 20.5937,
        "longitude": 78.9629
    }, {
        "id": "china",
        "title": "China",
        "destinations": [ "germany", "southafrica", "saudiarabia", "brazil", "mexico", "egypt", "argentina", "algeria"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 14.4492,
        "zoomLatitude": 53.2631,
        "latitude": 35.8617,
        "longitude": 104.1954
    }, {
        "id": "brazil",
        "title": "Brazil",
        "destinations": ["usa", "india", "saudiarabia", "southafrica", "switzerland", "ukraine", "france", "chile", "peru", "iceland"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 13.4492,
        "zoomLatitude": 48.2631,
        "latitude": -16.2650,
        "longitude": -50.3553
    }, {
        "id": "saudiarabia",
        "title": "Saudi Arabia",
        "destinations": [ "india", "southafrica", "germany", "brazil", "ukraine", "sweden", "phillipines", "russia", "sweden", "guinea"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 14.46492,
        "zoomLatitude": 48.4631,
        "latitude": 25.5595,
        "longitude": 44.9375
    }, {
        "id": "southafrica",
        "title": "South Africa",
        "destinations": ["usa", "india", "china", "germany", "ukraine", "france", "indonesia", "brazil", "ukraine"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 16.4492,
        "zoomLatitude": 48.2631,
        "latitude": -30.5595,
        "longitude": 22.9375
    }];


    originCities3 = [{
        "id": "germany",
        "title": "Germany",
        "destinations": ["usa", "india", "china", "saudiarabia", "vietnam", "zimbawe", "guyana"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 15.4492,
        "zoomLatitude": 50.2631,
        "latitude": 51.1657,
        "longitude": 10.4515
    }, {
        "id": "usa",
        "title": "USA",
        "destinations": [ "india", "chile", "southafrica", "saudiarabia", "sweden", "guinea", "switzerland"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 13.4492,
        "zoomLatitude": 53.2631,
        "latitude": 40.5602,
        "longitude": -74.7129
    }, {
        "id": "india",
        "title": "India",
        "destinations": [ "germany", "southafrica", "saudiarabia", "brazil","greenland", "bolivia", "vietnam"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 16.4492,
        "zoomLatitude": 54.2631,
        "latitude": 20.5937,
        "longitude": 78.9629
    }, {
        "id": "china",
        "title": "China",
        "destinations": ["australia", "germany", "saudiarabia", "brazil", "algeria", "mongolia", "newzealand"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 14.4492,
        "zoomLatitude": 53.2631,
        "latitude": 35.8617,
        "longitude": 104.1954
    }, {
        "id": "brazil",
        "title": "Brazil",
        "destinations": ["usa", "india", "china", "saudiarabia", "madagascar", "canada", "greenland"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 13.4492,
        "zoomLatitude": 48.2631,
        "latitude": -16.2650,
        "longitude": -50.3553
    }, {
        "id": "saudiarabia",
        "title": "Saudi Arabia",
        "destinations": ["usa", "china", "southafrica", "germany","drc", "thailand", "iran"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 14.46492,
        "zoomLatitude": 48.4631,
        "latitude": 25.5595,
        "longitude": 44.9375
    }, {
        "id": "southafrica",
        "title": "South Africa",
        "destinations": ["usa", "india", "germany", "brazil", "france", "indonesia", "malaysia"],
        "scale": 1.5,
        "zoomLevel": 0.92,
        "zoomLongitude": 16.4492,
        "zoomLatitude": 48.2631,
        "latitude": -30.5595,
        "longitude": 22.9375
    }];

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


    yearChanged($event: any) {
        console.log("yearChanged" + $event);
        this.originCities = [];
       this.originCities = this.yearByCitiesMap.get($event);
    }
}
