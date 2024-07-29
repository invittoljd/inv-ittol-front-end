/**Imports */
import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

/**Models */
import { ItemModel } from '@models/inventory/item.model';

@Component({
  selector: 'app-item-show',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './item-show.component.html',
  styleUrl: './item-show.component.css'
})
export class ItemShowComponent {
  @Input() item?: ItemModel;
}
