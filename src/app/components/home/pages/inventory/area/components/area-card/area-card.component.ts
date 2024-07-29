/**Imports */
import { NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

/**Models */
import { AreaModel } from '@models/inventory/area.model';

/**Services */
import { AreaService } from '@services/inventory/area/area.service';

@Component({
  selector: 'app-area-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './area-card.component.html',
  styleUrl: './area-card.component.css'
})
export class AreaCardComponent {
  /**Outputs */
  @Output() areaSelectedEvent = new EventEmitter<AreaModel>();

  /**Inputs */
  @Input() areaItem?: AreaModel;
  @Input() isAdmin?: boolean;

  /**Variables */
  link = ['/', 'home', 'inventory', 'categories'];

  /**Injects */
  private _areaService = inject(AreaService);
  private _router = inject(Router);

  /**
   * El método `setAreaSelected` emite un evento cuando se le asigna una nueva area.
   * @param {AreaModel | undefined} area - El parámetro `area` es de tipo `AreaModel`.
   */
  setAreaSelected(area: AreaModel | undefined) {
    if (area) {
      this.areaSelectedEvent.emit(area);
    }
  }

  /**
   * Método que nos permite navegar al un link en especifico, para este caso se usa para navegar al área seleccionada.
   */
  navigate() {
    if (this.areaItem) {
      this._router.navigate([...this.link, this.areaItem._id]);
    }
  }
}
