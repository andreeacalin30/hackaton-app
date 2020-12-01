import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreQ1Component } from './pre-q1.component';

describe('PreQ1Component', () => {
  let component: PreQ1Component;
  let fixture: ComponentFixture<PreQ1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreQ1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreQ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
