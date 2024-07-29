import { NgIf } from '@angular/common';
/**Imports */
import { Component, inject } from '@angular/core';

/**Services */
import { AreaService } from '@services/inventory/area/area.service';
import { SessionService } from '@services/shared/session/session.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

/**Components */
import { AreaCardsComponent } from '@home-inventory/area/components/area-cards/area-cards.component';
import { AreaAddComponent } from '@home-inventory/area/components/area-add/area-add.component';
import { AreaEditComponent } from '@home-inventory/area/components/area-edit/area-edit.component';
import { AreaShowComponent } from '@home-inventory/area/components/area-show/area-show.component';

/**Models */
import { AreaModel } from '@models/inventory/area.model';

@Component({
  selector: 'app-areas-page',
  standalone: true,
  imports: [
    AreaCardsComponent,
    AreaAddComponent,
    AreaShowComponent,
    AreaEditComponent,
    NgIf,
  ],
  templateUrl: './area-page.component.html',
  styleUrl: './area-page.component.css'
})
export class AreaPageComponent {
  /**Variables */
  areaSelected?: AreaModel;
  areas?: Array<AreaModel>;

  /**Injects */
  private _areaService = inject(AreaService);
  private _sessionService = inject(SessionService);
  private _waitingModalService = inject(WaitingModalService);

  /**
   * Método que se ejecuta al iniciar el componente, para este caso se usa para obtener la información sobre las
   * áreas de la base de datos.
   */
  async ngOnInit() {
    this._waitingModalService.setIsWaiting(true);
    this.areas = await this._areaService.getAreas();
    this._waitingModalService.setIsWaiting(false);
  }

  /**
   * Método que asigna el valor de area a la propiedad areaSelected.
   * @param {AreaModel} area - AreaModel.
   */
  setAreaSelected(area: AreaModel) {
    this.areaSelected = area;
  }

  /**
   * Método que nos permite obtener el nivel de acceso del usuario actual.
   */
  isAdmin(): boolean {
    return this._sessionService.isAdmin();
  }
}
