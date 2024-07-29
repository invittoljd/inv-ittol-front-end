/**Imports */
import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';

/**Services */
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

@Component({
  selector: 'app-waiting-modal',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './waiting-modal.component.html',
  styleUrl: './waiting-modal.component.css'
})
export class WaitingModalComponent {
  /**Injects */
  private _waitingModalService = inject(WaitingModalService);

  /**
   * Nos permite obtener el valor en tiempo real de la variable para analizar si es necesario mostrar el modal o no.
   * @returns el valor actual de la variable isWaiting, esta se obtiene del service WaitingModalService.
   */
  getIsWaiting(): boolean {
    return this._waitingModalService.getIsWaiting();
  }
}
