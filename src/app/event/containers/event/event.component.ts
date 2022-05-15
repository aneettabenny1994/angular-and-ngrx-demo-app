import { Component, OnInit } from '@angular/core';
import { Attendee } from 'src/app/models';
import { EventService } from '../../services/event.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  attendees: Attendee[] = [];
  attendees$!: Observable<Attendee[]>;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getAttendees();
  }

  getAttendees() {
    this.attendees$ = this.eventService.getAttendees();
  }

  addAttendee(attendee: Attendee) {
    this.eventService
    .addAttendee(attendee)
    .subscribe(() => this.getAttendees());
  }

}

