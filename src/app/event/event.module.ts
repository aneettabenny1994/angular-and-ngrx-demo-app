import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventComponent } from './containers/event/event.component';
import { AddAttendeeComponent } from './components/add-attendee/add-attendee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventListComponent } from './components/event-list/event-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../state';

@NgModule({
  declarations: [
    EventComponent,
    AddAttendeeComponent,
    EventListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EventComponent }
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('event', reducers)
  ]
})
export class EventModule { }
