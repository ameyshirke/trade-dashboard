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
import { PieChartWithLegendComponent } from './pie-chart-with-legend/pie-chart-with-legend.component';
import {FormsModule} from "@angular/forms";
import { AdminFormComponent } from '../pages/admin-form/admin-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SortedBarChartComponent,
    PieChartWithLegendComponent,
    AdminFormComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SortedBarChartComponent,
    PieChartWithLegendComponent,
    AdminFormComponent
  ]
})
export class ComponentsModule { }
