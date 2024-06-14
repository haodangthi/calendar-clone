import DialogTitle from "@mui/material/DialogTitle"
import IconButton from "@mui/material/IconButton"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import TextField from '@mui/material/TextField'
import {BasicTimePicker} from "./TimePicker.tsx"
import {IDay, IEvent} from "../types"
import {nanoid} from "nanoid"
import {useEventEdit} from "../hooks/useEventEdit.tsx"
import {DateTime} from "luxon"
import {EventsAction} from "../store/actions.ts";
import {useEventsContext} from "../context";

export const AddEventModal = ({chosenDay, setOpen, open}: {
    chosenDay: IDay | null,
    setOpen: (open: boolean) => void,
    open: boolean
}) => {
    const {
        debouncedHandleChange,
        setTime,
        setEventName,
        onTimePickerChange,
        eventName,
        nameChanged,
        time
    } = useEventEdit({
        name: '',
        time: DateTime.now().toISOTime()
    } as IEvent)

    const {dispatchEvents} = useEventsContext()

    const close = () => {
        setEventName('')
        setOpen(false)
    }

    const saveChanges = () => {
        const dayId = chosenDay?.data.toISODate()
        const timeString = time?.toISOTime()

        if (!nameChanged.current || !timeString || !dayId) {
            return
        }

        const event: IEvent = {
            dayId,
            id: nanoid(),
            time: timeString,
            name: eventName
        }

        dispatchEvents({type: EventsAction.add, payload: event})
        close()
    }

    return <>
        <Dialog
            onClose={close}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Add an event
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
                <div className='add-event-dialog__content'>
                    <TextField
                        sx={{
                            marginBottom: 2
                        }}
                        id="standard-basic"
                        label="Event name"
                        variant="standard"
                        defaultValue={eventName}
                        required
                        onChange={debouncedHandleChange}
                    />
                    <BasicTimePicker
                        value = {DateTime.now()}
                        setTime = {onTimePickerChange}
                    ></BasicTimePicker>
                </div>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={saveChanges} disabled = {!eventName}>
                    Save changes
                </Button>
            </DialogActions>
        </Dialog>
    </>
}