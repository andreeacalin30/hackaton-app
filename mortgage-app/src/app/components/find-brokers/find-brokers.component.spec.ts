import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBrokersComponent } from './find-brokers.component';

describe('FindBrokersComponent', () => {
  let component: FindBrokersComponent;
  let fixture: ComponentFixture<FindBrokersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindBrokersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBrokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
