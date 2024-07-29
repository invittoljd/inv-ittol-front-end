/**Imports */
import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

/**Components */
import { AreaCardComponent } from '@home-inventory/area/components/area-card/area-card.component';

/**Models */
import { AreaModel } from '@models/inventory/area.model';

@Component({
  selector: 'app-area-cards',
  standalone: true,
  imports: [
    AreaCardComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './area-cards.component.html',
  styleUrl: './area-cards.component.css'
})
export class AreaCardsComponent {
  /**Outputs */
  @Output() areaSelectedEvent = new EventEmitter<AreaModel>();

  /**Inputs */
  @Input() areas?: Array<AreaModel>;
  @Input() isAdmin?: boolean;

  /**
   * El método `setAreaSelected` emite un evento cuando se le asigna una nueva area.
   * @param {AreaModel} area - El parámetro `area` es de tipo `AreaModel`.
   */
  setAreaSelected(area: AreaModel) {
    this.areaSelectedEvent.emit(area);
  }
}
