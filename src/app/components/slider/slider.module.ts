import { NgModule } from '@angular/core';
import {SliderComponent} from "./slider.component";
import {NgxSliderModule} from "ngx-slider-v2";

@NgModule({
  declarations: [SliderComponent],
  imports: [
    NgxSliderModule
  ],
  exports: [SliderComponent],
})
export class SliderModule {
  constructor() { }

  ngOnInit(): void { }
}
