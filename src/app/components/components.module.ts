import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MapWithPathsModule} from "./map-with-paths/map-with-paths.module";
import {MapWithPathsComponent} from "./map-with-paths/map-with-paths.component";
import {MapWithDropdownComponent} from "./map-with-dropdown/map-with-dropdown.component";
import { SortedBarChartComponent } from './sorted-bar-chart/sorted-bar-chart.component';
import { VariableRadiusNestedDonutChartComponent } from './variable-radius-nested-donut-chart/variable-radius-nested-donut-chart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MapWithPathsComponent,
    MapWithDropdownComponent,
    SortedBarChartComponent,
    VariableRadiusNestedDonutChartComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MapWithPathsComponent,
    MapWithDropdownComponent,
    SortedBarChartComponent,
    VariableRadiusNestedDonutChartComponent
  ]
})
export class ComponentsModule { }
