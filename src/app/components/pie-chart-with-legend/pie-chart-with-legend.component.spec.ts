import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartWithLegendComponent } from './pie-chart-with-legend.component';

describe('PieChartWithLegendComponent', () => {
  let component: PieChartWithLegendComponent;
  let fixture: ComponentFixture<PieChartWithLegendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartWithLegendComponent]
    });
    fixture = TestBed.createComponent(PieChartWithLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
