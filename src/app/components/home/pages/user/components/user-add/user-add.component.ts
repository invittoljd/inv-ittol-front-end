/**Imports */
import { NgFor } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**Models */
import { AlertModel, AlertType } from '@models/alert.model';
import { UserModel } from '@models/user/user.model';

/**Services */
import { AuthService } from '@services/auth/auth.service';
import { AlertService } from '@services/shared/alert/alert.service';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgFor
  ],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {
  /**Inputs */
  @Input() users?: Array<UserModel>;

  /**Injects */
  private _authService = inject(AuthService);
  private _alertService = inject(AlertService);

  /**FormGroups */
  formUser: FormGroup = new FormGroup({});

  /**
  * Método que se ejecuta al iniciar, en este caso nos permite iniciar el formulario.
  */
  async ngOnInit() {
    this.formUser = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.min(0)
      ]),
      type: new FormControl('', [
        Validators.required,
        Validators.min(0)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
    });
  }

  /**
   * Método que nos permite verificar la información del área y enviar dicha información al servicio.
   */
  async sendUser() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al agregar usuario, favor de revisar",
      type: AlertType.Danger
    };
    if (this.formUser.valid && this.users) {
      const { username, type, password, passwordConfirm } = this.formUser.value; // Obtenemos la información ingresada por el usuario.
      if (password === passwordConfirm) {
        const user: UserModel = {
          username, type, password
        };
        if (await this._authService.signIn(this.users, user)) {
          this.formUser.reset();
          alert = {
            keep: false,
            text: "Usuario agregado con éxito",
            type: AlertType.Success
          }
        }
      }
    }
    this._alertService.addAlert(alert);
  }
}
