import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCardsComponent } from './area-cards.component';

describe('AreaCardsComponent', () => {
  let component: AreaCardsComponent;
  let fixture: ComponentFixture<AreaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
