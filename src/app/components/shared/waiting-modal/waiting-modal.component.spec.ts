import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingModalComponent } from './waiting-modal.component';

describe('WaitingModalComponent', () => {
  let component: WaitingModalComponent;
  let fixture: ComponentFixture<WaitingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaitingModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaitingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
