/**Imports */
import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

/**Models */
import { CategoryModel } from '@models/inventory/category.model';

@Component({
  selector: 'app-category-show',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './category-show.component.html',
  styleUrl: './category-show.component.css'
})
export class CategoryShowComponent {
  /**Inputs */
  @Input() category?: CategoryModel;
}
