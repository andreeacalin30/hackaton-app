import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreQ5Component } from './pre-q5.component';

describe('PreQ5Component', () => {
  let component: PreQ5Component;
  let fixture: ComponentFixture<PreQ5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreQ5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreQ5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
