import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedBarChartComponent } from './sorted-bar-chart.component';

describe('SortedBarChartComponent', () => {
  let component: SortedBarChartComponent;
  let fixture: ComponentFixture<SortedBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortedBarChartComponent]
    });
    fixture = TestBed.createComponent(SortedBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
