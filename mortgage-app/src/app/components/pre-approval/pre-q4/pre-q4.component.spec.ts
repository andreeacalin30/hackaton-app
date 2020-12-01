import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreQ4Component } from './pre-q4.component';

describe('PreQ4Component', () => {
  let component: PreQ4Component;
  let fixture: ComponentFixture<PreQ4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreQ4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreQ4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
