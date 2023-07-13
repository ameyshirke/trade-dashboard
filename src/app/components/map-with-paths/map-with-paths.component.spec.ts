import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWithPathsComponent } from './map-with-paths.component';

describe('MapWithPathsComponent', () => {
  let component: MapWithPathsComponent;
  let fixture: ComponentFixture<MapWithPathsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapWithPathsComponent]
    });
    fixture = TestBed.createComponent(MapWithPathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
