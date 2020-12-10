import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPageMockComponent } from './map-page-mock.component';

describe('MapPageMockComponent', () => {
  let component: MapPageMockComponent;
  let fixture: ComponentFixture<MapPageMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapPageMockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPageMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
