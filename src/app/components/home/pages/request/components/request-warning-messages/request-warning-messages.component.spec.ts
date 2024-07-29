import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWarningMessagesComponent } from './request-warning-messages.component';

describe('RequestWarningMessagesComponent', () => {
  let component: RequestWarningMessagesComponent;
  let fixture: ComponentFixture<RequestWarningMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestWarningMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestWarningMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
