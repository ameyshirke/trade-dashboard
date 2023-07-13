import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWithDropdownComponent } from './map-with-dropdown.component';

describe('MapWithDropdownComponent', () => {
  let component: MapWithDropdownComponent;
  let fixture: ComponentFixture<MapWithDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapWithDropdownComponent]
    });
    fixture = TestBed.createComponent(MapWithDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
