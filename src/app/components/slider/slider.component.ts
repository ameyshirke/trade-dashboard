import { Component } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  value: number = 5;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 1990},
      { value: 1995 },
      { value: 2000 },
      { value: 2005 },
      { value: 2010 },
      { value: 2015 },
      { value: 2020 },
      { value: 2025 },
      { value: 2030 }
    ]
  };
}
