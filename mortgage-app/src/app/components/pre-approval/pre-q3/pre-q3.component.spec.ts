import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreQ3Component } from './pre-q3.component';

describe('PreQ3Component', () => {
  let component: PreQ3Component;
  let fixture: ComponentFixture<PreQ3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreQ3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreQ3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
