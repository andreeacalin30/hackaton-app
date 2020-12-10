import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerDescriptionComponent } from './broker-description.component';

describe('BrokerDescriptionComponent', () => {
  let component: BrokerDescriptionComponent;
  let fixture: ComponentFixture<BrokerDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
