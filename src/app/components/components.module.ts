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
    MapWithDropdownComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MapWithPathsComponent,
    MapWithDropdownComponent
  ]
})
export class ComponentsModule { }
