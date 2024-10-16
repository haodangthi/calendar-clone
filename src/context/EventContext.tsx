import { Dispatch, createContext, useContext, useReducer } from "react";

import { EventsActionType } from "../store/actions.ts";
import {
  loadStateFromLocalStorage,
  reducerWithLocalStorage,
} from "../store/helpers";
import { Events } from "../types";

interface EventsContextType {
  events: Events;
  dispatchEvents: Dispatch<EventsActionType>;
}

const EventsContext = createContext<EventsContextType | null>(null);

export const useEventsContext = (): EventsContextType => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error(
      "useEventsContext must be used within a EventsContextProvider",
    );
  }
  return context;
};

export const EventsContextProvider = (props: any) => {
  const [events, dispatchEvents] = useReducer(
    reducerWithLocalStorage,
    loadStateFromLocalStorage(),
  );

  return (
    <EventsContext.Provider value={{ events, dispatchEvents }} {...props} />
  );
};
