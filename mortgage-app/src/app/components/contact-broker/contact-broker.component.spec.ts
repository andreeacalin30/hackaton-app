import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBrokerComponent } from './contact-broker.component';

describe('ContactBrokerComponent', () => {
  let component: ContactBrokerComponent;
  let fixture: ComponentFixture<ContactBrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBrokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
