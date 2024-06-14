import DialogTitle from "@mui/material/DialogTitle"
import {DialogContentText} from "@mui/material"
import {IEvent} from "../types"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"
import { useEventsContext} from "../context"
import {EventsAction} from "../store/actions.ts"
import {DateTime} from "luxon"
import IconButton from "@mui/material/IconButton"
import {FC} from "react"

interface EventDisplayModalProps {
    switchToEdit: () => void;
    event: IEvent;
    close: () => void;
}
export const EventDisplayModal: FC<EventDisplayModalProps> = ({
                                     switchToEdit,
                                     event,
                                     close
}) => {
    const { dispatchEvents } = useEventsContext()
    const displayedTime = DateTime.fromISO(event.time).toLocaleString(DateTime.TIME_SIMPLE)
    const deleteEvent = () => {
        dispatchEvents({
            type: EventsAction.delete,
            payload: event
        })
    }

    return <>
        <DialogTitle id="event-dialog-title">
            {event.name}
        </DialogTitle>
        <IconButton
            aria-label="close"
            onClick={close}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
        >
            X
        </IconButton>
        <DialogContent>
            <DialogContentText>
                Event time: {displayedTime}
            </DialogContentText>
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
}