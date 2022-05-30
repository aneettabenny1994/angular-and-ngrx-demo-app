import { Attendee } from '../../models';
import { AttendeesActions, AttendeesActionTypes } from './attendees.actions';

export interface State {
  attendees: Attendee[];
  loading: boolean;
}

export const intitalState: State = {
  attendees: [{
    id: 3,
    name: 'Cookie',
    guests: 2,
    attending: true
  }],
  loading: false
};

export function reducer(state = intitalState, action: AttendeesActions) : State{
  switch (action.type) {
    case AttendeesActionTypes.LoadAttendees:
      return {
        attendees: [],
        loading: false
      }
      break;

    default: 
      return state;
  }
}
