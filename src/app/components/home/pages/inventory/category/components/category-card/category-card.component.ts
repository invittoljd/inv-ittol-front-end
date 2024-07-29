/**Imports */
import { NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

/**Models */
import { AreaModel } from '@models/inventory/area.model';
import { CategoryModel } from '@models/inventory/category.model';

/**Services */
import { SessionService } from '@services/shared/session/session.service';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  /**Outputs */
  @Output() categorySelectedEvent = new EventEmitter<CategoryModel>();

  /**Inputs */
  @Input() area?: AreaModel;
  @Input() category?: CategoryModel;

  /**Variables */
  link = ['/', 'home', 'inventory', 'items'];

  /**Injects */
  private _sessionService = inject(SessionService);
  private _router = inject(Router);

  /**Método que nos permite verificar si el usuario logueado es admnistrador. */
  isAdmin() {
    return this._sessionService.isAdmin();
  }

  /**
   * Método que nos permite notificar cuando el usuario selecciona una categoría.
   * @param category CategoryModel de la categoría que se ha seleccionado.
   */
  setCategorySelected(category: CategoryModel | undefined) {
    if (category) {
      this.categorySelectedEvent.emit(category);
    }
  }

  /**
   * Método que nos permite navegar a los equipos o reactivos, según sea el caso.
   */
  navigate() {
    if (this.area && this.category) {
      this._router.navigate([...this.link, this.area._id, this.category._id]);
    }
  }
}
