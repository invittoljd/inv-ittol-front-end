import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWarningComponent } from './request-warning.component';

describe('RequestWarningComponent', () => {
  let component: RequestWarningComponent;
  let fixture: ComponentFixture<RequestWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestWarningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
