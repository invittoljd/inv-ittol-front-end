/**Imports */
import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

/**Models */
import { AreaModel } from '@models/inventory/area.model';
import { CategoryModel } from '@models/inventory/category.model';

/**Components */
import { CategoryCardComponent } from '@home-inventory/category/components/category-card/category-card.component';

@Component({
  selector: 'app-category-cards',
  standalone: true,
  imports: [
    CategoryCardComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './category-cards.component.html',
  styleUrl: './category-cards.component.css'
})
export class CategoryCardsComponent {
  /**Outputs */
  @Output() categorySelectedEvent = new EventEmitter<CategoryModel>();

  /**Inputs */
  @Input() area?: AreaModel;
  @Input() categories?: Array<CategoryModel>;

  /**
   * Método que nos permite notificar de una categoría que el usuario ha seleccionado.
   * @param category CategoryModel la categoría seleccionada.
   */
  setCategorySelected(category: CategoryModel) {
    this.categorySelectedEvent.emit(category);
  }
}
