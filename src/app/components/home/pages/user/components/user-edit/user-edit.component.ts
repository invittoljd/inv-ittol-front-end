/**Imports */
import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**Models */
import { AlertModel, AlertType } from '@models/alert.model';
import { UserModel } from '@models/user/user.model';

/**Services */
import { AuthService } from '@services/auth/auth.service';
import { AlertService } from '@services/shared/alert/alert.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  /**Inputs */
  @Input() users?: Array<UserModel>;
  @Input() user?: UserModel;

  /**FormGroups */
  formUser: FormGroup = new FormGroup({});

  /**Injects */
  private _alertService = inject(AlertService);
  private _authService = inject(AuthService);
  private _waitingModalService = inject(WaitingModalService);

  /**Variables */
  isPasswordChangeChecked: boolean = false;
  isTypeChangeChecked: boolean = false;

  /**
   * Método que se ejecuta al iniciar, en este caso nos permite iniciar el formulario.
   */
  async ngOnInit() {
    this.formUser = new FormGroup({
      type: new FormControl('', [
        Validators.min(0)
      ]),
      password: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      passwordConfirm: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
    });
  }

  /**
   * Método que nos permite verificar la información del usuario y enviar dicha información al servicio.
   */
  async sendUser() {
    this._waitingModalService.setIsWaiting(true);
    let alert: AlertModel = {
      keep: false,
      text: "Error al modificar usuario, favor de revisar",
      type: AlertType.Danger
    };
    if (this.formUser.valid && this.users && this.user) {
      let send = true;
      const { type, password, passwordConfirm } = this.formUser.value; // Obtenemos la información ingresada por el usuario.
      if (type!=undefined ) {
        this.user.type = type;
      }
      if (password && passwordConfirm) {
        if (password === passwordConfirm) {
          this.user.password = password;
        } else {
          send = false;
        }
      }
      if (type >= 0 && send) {
        if (await this._authService.updateUser(this.users, this.user)) {
          this.formUser.reset();
          alert = {
            keep: false,
            text: "Usuario actualizado con éxito",
            type: AlertType.Success
          }
        }
      }
    }
    this._alertService.addAlert(alert);
    this._waitingModalService.setIsWaiting(false);
  }

  /**
   * Método que nos permite mandar la solicitud para eliminar un usuario.
   */
  async deleteUser() {
    this._waitingModalService.setIsWaiting(true);
    let alert: AlertModel = {
      keep: false,
      text: "Error al eliminar Usuario, favor de revisar",
      type: AlertType.Danger
    };
    if (this.users && this.user?._id) {
      if (await this._authService.deleteUser(this.users, this.user._id)) {
        alert = {
          keep: false,
          text: "Usuario eliminado con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
    this._waitingModalService.setIsWaiting(false);
  }
}
