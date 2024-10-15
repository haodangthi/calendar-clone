import { Events } from "../types";
import { EventsAction, EventsActionType } from "./actions.ts";
import { addNewEvent, deleteEvent, editEvent } from "./helpers";

export const eventsReducer = (state: Events, action: EventsActionType) => {
  switch (action.type) {
    case EventsAction.add: {
      return addNewEvent(state, action.payload);
    }

    case EventsAction.delete: {
      return deleteEvent(state, action.payload);
    }

    case EventsAction.edit: {
      return editEvent(state, action.payload);
    }

    default: {
      return state;
    }
  }
};
