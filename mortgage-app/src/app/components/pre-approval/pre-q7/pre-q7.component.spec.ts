import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreQ7Component } from './pre-q7.component';

describe('PreQ7Component', () => {
  let component: PreQ7Component;
  let fixture: ComponentFixture<PreQ7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreQ7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreQ7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
