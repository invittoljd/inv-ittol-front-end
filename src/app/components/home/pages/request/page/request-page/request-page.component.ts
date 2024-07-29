/**Imports */
import { Component, inject } from '@angular/core';

/**Models */
import { RequestModel } from '@models/request/request.model';

/**Services */
import { RequestService } from '@services/request/request.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

/**Components */
import { ItemShowComponent } from "@home-inventory/item/components/item-show/item-show.component";
import { RequestCardsComponent } from "@home-request/components/request-cards/request-cards.component";
import { RequestDeleteComponent } from "../../components/request-delete/request-delete.component";
import { RequestWarningComponent } from "../../components/request-warning/request-warning.component";

@Component({
  selector: 'app-request-page',
  standalone: true,
  imports: [
    RequestCardsComponent,
    ItemShowComponent,
    RequestDeleteComponent,
    RequestWarningComponent
  ],
  templateUrl: './request-page.component.html',
  styleUrl: './request-page.component.css'
})
export class RequestPageComponent {
  /**Variables */
  requests?: Array<RequestModel>;
  filteredRequests?: Array<RequestModel>;

  requestSelected?: RequestModel;

  filterValue: string = "pending";
  searchTerm: string = '';

  /**Injects */
  private _requestService = inject(RequestService);
  private _waitingModalService = inject(WaitingModalService);

  async ngOnInit() {
    this._waitingModalService.setIsWaiting(true);
    /**all, pending, approved */
    this.requests = await this._requestService.getRequests();
    this.applySearchTerm();
    this._waitingModalService.setIsWaiting(false);
  }

  setRequestSelected(request: RequestModel) {
    this.requestSelected = request;
  }

  async filterRequests(event: any) {
    this._waitingModalService.setIsWaiting(true);
    this.filterValue = event.target.value;
    this.requests = await this._requestService.getRequests();
    this.applySearchTerm();
    this._waitingModalService.setIsWaiting(false);
  }

  searchRequests(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.applySearchTerm();
  }

  applySearchTerm() {
    if (this.filterValue == "all") {
      this.filteredRequests = this.requests;
    } else if (this.filterValue == "pending") {
      this.filteredRequests = this.requests?.filter(request => request.status == false);
    } else if (this.filterValue == "approved") {
      this.filteredRequests = this.requests?.filter(request => request.status == true);
    }
    this.filteredRequests = this.filteredRequests?.filter(request =>
      request._id?.toLowerCase().includes(this.searchTerm) ||
      request.author?.toLowerCase().includes(this.searchTerm)
    );
  }
}
