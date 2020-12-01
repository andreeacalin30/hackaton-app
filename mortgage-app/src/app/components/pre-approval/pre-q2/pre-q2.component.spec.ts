import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreQ2Component } from './pre-q2.component';

describe('PreQ2Component', () => {
  let component: PreQ2Component;
  let fixture: ComponentFixture<PreQ2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreQ2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreQ2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
