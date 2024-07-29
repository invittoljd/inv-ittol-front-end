import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCardAdminComponent } from './request-card-admin.component';

describe('RequestCardAdminComponent', () => {
  let component: RequestCardAdminComponent;
  let fixture: ComponentFixture<RequestCardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestCardAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestCardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
