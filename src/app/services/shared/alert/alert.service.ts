/**Imports */
import { Injectable } from '@angular/core';

/**Models */
import { AlertModel } from '@models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  /**Variables */
  private alerts: Array<AlertModel> = [];
  private timeToDestroy: number = 1;

  /**
   * Get que nos permite obtener el arreglo de las alertas.
   * @returns el arreglo de las AlertModel.
   */
  getAlerts(): Array<AlertModel> {
    return this.alerts;
  }

  /**
   * Método que nos permite agregar una alerta al arreglo de las alertas.
   * @param alert AlertModel alerta a agregar al arreglo de las alertas.
   * @returns la alerta agregada al arreglo.
   */
  addAlert(alert: AlertModel): AlertModel {
    this.alerts.push(alert);
    // this.startToDestroy(alert);
    return alert;
  }

  /**
   * Método que nos permite iniciar la destrucción de la alerta durante el tiempo especificado.
   */
  private async startToDestroy(alert: AlertModel) {
    setTimeout(() => {
      this.removeAlert(alert);
    }, this.timeToDestroy);
  }

  /**
   * Método que nos permite eliminar una alerta del arreglo de alertas.
   * @param alert AlertModel de la alerta a eliminar del arreglo.
   */
  private removeAlert(alert: AlertModel): AlertModel | undefined {
    const index = this.alerts.indexOf(alert);
    if (index > -1) {
      this.alerts.splice(index, 1);
      return alert;
    }
    return undefined;
  }
}
