import {Component, EventEmitter, Output} from '@angular/core';
import {Options} from "ngx-slider-v2";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Output() sliderChanged: EventEmitter<any> = new EventEmitter<any>();

  value: number = 5;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 2012},
      { value: 2013 },
      { value: 2014 },
      { value: 2015 },
      { value: 2016 },
      { value: 2017 },
      { value: 2018 },
      { value: 2019 },
      { value: 2020 },
      { value: 2021 },
      { value: 2022 },
      { value: 2023 },
    ]
  };

  onSliderChange(e: any) {
    debugger
    console.log('Slider value changed:', e.value);
    this.sliderChanged.emit(e.value);
  }
}
