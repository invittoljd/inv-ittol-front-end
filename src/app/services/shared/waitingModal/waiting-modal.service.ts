/**Imports */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Service que nos permite manejar el status de mostrar un modal con una animación que muestre al usuario que la información
 * esta siendo procesada.
 */
export class WaitingModalService {
  /**Variables */
  private isWaiting: boolean = false;

  /**
   * Set que nos permite cambiar el valor de nuestra variable isWaiting.
   * @param value boolean con el valor a asignar.
   */
  setIsWaiting(value: boolean): void {
    this.isWaiting = value;
  }

  /**
   * Get que nos permite obtener el valor de la variable isWaiting.
   * @returns el valor actual de la variable isWaiting.
   */
  getIsWaiting(): boolean {
    return this.isWaiting;
  }
}
