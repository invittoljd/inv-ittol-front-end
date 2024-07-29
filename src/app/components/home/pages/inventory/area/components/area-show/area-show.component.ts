/**Imports */
import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

/**Models */
import { AreaModel } from '@models/inventory/area.model';

@Component({
  selector: 'app-area-show',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './area-show.component.html',
  styleUrl: './area-show.component.css'
})
export class AreaShowComponent {
  /**Inputs */
  @Input() area?: AreaModel;
}
