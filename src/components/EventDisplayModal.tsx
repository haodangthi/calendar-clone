import { FC } from "react";

import { DateTime } from "luxon";

import { DialogContentText } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

import { useEventsContext } from "../context";
import { EventsAction } from "../store/actions.ts";
import { IEvent } from "../types";

interface EventDisplayModalProps {
  switchToEdit: () => void;
  event: IEvent;
  close: () => void;
}
export const EventDisplayModal: FC<EventDisplayModalProps> = ({
  switchToEdit,
  event,
  close,
}) => {
  const { dispatchEvents } = useEventsContext();
  const displayedTime = DateTime.fromISO(event.time).toLocaleString(
    DateTime.TIME_SIMPLE,
  );
  const deleteEvent = () => {
    dispatchEvents({
      type: EventsAction.delete,
      payload: event,
    });
  };

  return (
    <>
      <DialogTitle id="event-dialog-title">{event.name}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={close}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        X
      </IconButton>
      <DialogContent>
        <DialogContentText>Event time: {displayedTime}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={switchToEdit}>
          Edit
        </Button>
        <Button onClick={deleteEvent} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </>
  );
};
