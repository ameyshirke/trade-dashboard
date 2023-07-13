import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableRadiusNestedDonutChartComponent } from './variable-radius-nested-donut-chart.component';

describe('VariableRadiusNestedDonutChartComponent', () => {
  let component: VariableRadiusNestedDonutChartComponent;
  let fixture: ComponentFixture<VariableRadiusNestedDonutChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariableRadiusNestedDonutChartComponent]
    });
    fixture = TestBed.createComponent(VariableRadiusNestedDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
