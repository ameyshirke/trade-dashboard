import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// import * as am5xy from '@amcharts/amcharts5/xy';
// import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-map-with-dropdown',
  templateUrl: './map-with-dropdown.component.html',
  styleUrls: ['./map-with-dropdown.component.scss']
})

export class MapWithDropdownComponent {


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

        let chart = am4core.create("chartdiv", am4maps.MapChart);

        let interfaceColors = new am4core.InterfaceColorSet();

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Mercator();

        // Export
        chart.exporting.menu = new am4core.ExportMenu();

        // Zoom control
        chart.zoomControl = new am4maps.ZoomControl();

        // Data for general and map use
        let destinationCities = [
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



        let originCities = [{
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

        // Default to London view
        //chart.homeGeoPoint = { "longitude": originCities[0].zoomLongitude, "latitude": originCities[0].zoomLatitude };
        //chart.homeZoomLevel = originCities[0].zoomLevel;

        let targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        let planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

        // Texts
        let labelsContainer = chart.createChild(am4core.Container);
        labelsContainer.isMeasured = false;
        labelsContainer.x = 80;
        labelsContainer.y = 27;
        labelsContainer.layout = "horizontal";
        labelsContainer.zIndex = 10;

        let plane = labelsContainer.createChild(am4core.Sprite);
        plane.scale = 0.15;
        plane.path = planeSVG;
        plane.fill = am4core.color("#cc0000");

        let title = labelsContainer.createChild(am4core.Label);
        title.text = "Flights from London";
        title.fill = am4core.color("#cc0000");
        title.fontSize = 20;
        title.valign = "middle";
        title.dy = 2;
        title.marginLeft = 15;

        let changeLink = chart.createChild(am4core.TextLink);
        changeLink.text = "Click to change origin city";
        changeLink.isMeasured = false;

        changeLink.events.on("hit", function() {
            if (currentOrigin == originImageSeries.dataItems.getIndex(6)) {
                showLines(originImageSeries.dataItems.getIndex(1));
            }
            else {
                showLines(originImageSeries.dataItems.getIndex(6));
            }
        })

        changeLink.x = 142;
        changeLink.y = 72;
        changeLink.fontSize = 13;


        // The world
        let worldPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        worldPolygonSeries.useGeodata = true;
        worldPolygonSeries.fillOpacity = 0.6;
        worldPolygonSeries.exclude = ["AQ"];

        // Origin series (big targets, London and Vilnius)
        let originImageSeries = chart.series.push(new am4maps.MapImageSeries());

        let originImageTemplate = originImageSeries.mapImages.template;

        originImageTemplate.propertyFields.latitude = "latitude";
        originImageTemplate.propertyFields.longitude = "longitude";
        originImageTemplate.propertyFields.id = "id";

        originImageTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
        originImageTemplate.nonScaling = true;
        originImageTemplate.tooltipText = "{title}";

        originImageTemplate.setStateOnChildren = true;
        originImageTemplate.states.create("hover");

        originImageTemplate.horizontalCenter = "middle";
        originImageTemplate.verticalCenter = "middle";

        let originHitCircle = originImageTemplate.createChild(am4core.Circle);
        originHitCircle.radius = 11;
        originHitCircle.fill = interfaceColors.getFor("background");

        let originTargetIcon = originImageTemplate.createChild(am4core.Sprite);
        originTargetIcon.fill = interfaceColors.getFor("alternativeBackground");
        originTargetIcon.strokeWidth = 0;
        originTargetIcon.scale = 1.3;
        originTargetIcon.horizontalCenter = "middle";
        originTargetIcon.verticalCenter = "middle";
        originTargetIcon.path = targetSVG;

        let originHoverState = originTargetIcon.states.create("hover");
        originHoverState.properties.fill = chart.colors.getIndex(1);

        // when hit on city, change lines
        originImageTemplate.events.on("hit", function(event) {
            showLines(event.target.dataItem);
        })

        // destination series (small targets)
        let destinationImageSeries = chart.series.push(new am4maps.MapImageSeries());
        let destinationImageTemplate = destinationImageSeries.mapImages.template;

        destinationImageTemplate.nonScaling = true;
        destinationImageTemplate.tooltipText = "{title}";
        destinationImageTemplate.fill = interfaceColors.getFor("alternativeBackground");
        destinationImageTemplate.setStateOnChildren = true;
        destinationImageTemplate.states.create("hover");

        destinationImageTemplate.propertyFields.latitude = "latitude";
        destinationImageTemplate.propertyFields.longitude = "longitude";
        destinationImageTemplate.propertyFields.id = "id";

        let destinationHitCircle = destinationImageTemplate.createChild(am4core.Circle);
        destinationHitCircle.radius = 7;
        destinationHitCircle.fillOpacity = 1;
        destinationHitCircle.fill = interfaceColors.getFor("background");

        let destinationTargetIcon = destinationImageTemplate.createChild(am4core.Sprite);
        destinationTargetIcon.scale = 0.7;
        destinationTargetIcon.path = targetSVG;
        destinationTargetIcon.horizontalCenter = "middle";
        destinationTargetIcon.verticalCenter = "middle";

        originImageSeries.data = originCities;
        destinationImageSeries.data = destinationCities;

        // Line series
        let lineSeries = chart.series.push(new am4maps.MapLineSeries());
        lineSeries.mapLines.template.line.strokeOpacity = 0.5;

        chart.events.on("ready", function() {
            showLines(originImageSeries.dataItems.getIndex(0));
        })


        let currentOrigin: am4maps.MapImageSeriesDataItem | undefined;

        function showLines(origin: any) {

            let dataContext = origin.dataContext;
            let destinations = dataContext.destinations;
            // clear old
            lineSeries.mapLines.clear();
            lineSeries.toBack();
            worldPolygonSeries.toBack();

            currentOrigin = origin;

            if (destinations) {
                for (var i = 0; i < destinations.length; i++) {
                    let line = lineSeries.mapLines.create();
                    line.imagesToConnect = [origin.mapImage.id, destinations[i]];
                }
            }

            title.text = "Flights from " + dataContext.title;

            chart.zoomToGeoPoint({ latitude: dataContext.zoomLatitude, longitude: dataContext.zoomLongitude }, dataContext.zoomLevel, true);
        }

        let graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
        graticuleSeries.mapLines.template.line.strokeOpacity = 0.05;
      });

    }

}
