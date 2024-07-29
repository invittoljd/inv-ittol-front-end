/**Imports */
import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**Models */
import { RequestModel } from '@models/request/request.model';

/**Services */
import { RequestService } from '@services/request/request.service';
import { WaitingModalService } from '@services/shared/waitingModal/waiting-modal.service';

@Component({
  selector: 'app-itinerary-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgFor
  ],
  templateUrl: './itinerary-page.component.html',
  styleUrl: './itinerary-page.component.css'
})
export class ItineraryPageComponent {
  /**Variables */
  requests?: Array<RequestModel>;
  schedule: Array<{ time: string, requests: RequestModel[] }> = [];

  /**FormGroups */
  formDate: FormGroup = new FormGroup({});

  /**Injects */
  private _waitingModalService = inject(WaitingModalService);
  private _requestService = inject(RequestService);

  ngOnInit(): void {
    const today = new Date();
    const formattedDate = today.toISOString().substring(0, 10); // Formato 'yyyy-MM-dd'

    this.formDate = new FormGroup({
      date: new FormControl(formattedDate, [
        Validators.required
      ])
    });
  }

  async submit() {
    if (this.formDate.valid) {
      const { date } = this.formDate.value;
      this._waitingModalService.setIsWaiting(true);
      this.requests = await this._requestService.getRequestsToday(date);
      this.generateSchedule(this.requests, date);
      this._waitingModalService.setIsWaiting(false);
    }
  }

  generateSchedule(requests: RequestModel[], date: string): void {
    const schedule = [];
    const [year, month, day] = date.split('-').map(Number);
    const baseDate = new Date(year, month - 1, day); // Meses en JavaScript son 0-indexados

    for (let hour = 0; hour < 24; hour++) {
      const start = new Date(baseDate);
      start.setHours(hour, 0, 0, 0);

      const end = new Date(baseDate);
      end.setHours(hour + 1, 0, 0, 0);

      const hourlyRequests = requests.filter((request) => {
        if (request.startDate && request.endDate) {
          return (new Date(request.startDate).getTime() < end.getTime() &&
            new Date(request.endDate).getTime() > start.getTime());
        } else {
          return false;
        }
      });

      if (hourlyRequests.length > 0) {
        schedule.push({ time: `${hour}:00 - ${hour + 1}:00`, requests: hourlyRequests });
      }
    }

    this.schedule = schedule;
  }

}
