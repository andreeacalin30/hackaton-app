import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreQ6Component } from './pre-q6.component';

describe('PreQ6Component', () => {
  let component: PreQ6Component;
  let fixture: ComponentFixture<PreQ6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreQ6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreQ6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
