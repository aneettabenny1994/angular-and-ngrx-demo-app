import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventComponent } from './containers/event/event.component';
import { AddAttendeeComponent } from './components/add-attendee/add-attendee.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventComponent,
    AddAttendeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EventComponent }
    ]),
    ReactiveFormsModule
  ]
})
export class EventModule { }
