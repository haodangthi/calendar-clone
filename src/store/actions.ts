import { IEvent } from "../types";

export enum EventsAction {
  add = "ADD_NEW_EVENT",
  delete = "DELETE_EVENT",
  edit = "EDIT_EVENT",
}

interface AddEventAction {
  type: EventsAction.add;
  payload: IEvent;
}

interface DeleteEventAction {
  type: EventsAction.delete;
  payload: IEvent;
}

interface EditEventAction {
  type: EventsAction.edit;
  payload: IEvent;
}

export type EventsActionType =
  | AddEventAction
  | DeleteEventAction
  | EditEventAction;
