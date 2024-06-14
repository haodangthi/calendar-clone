import DialogTitle from "@mui/material/DialogTitle"
import IconButton from "@mui/material/IconButton"
import DialogContent from "@mui/material/DialogContent"
import TextField from "@mui/material/TextField"
import {BasicTimePicker} from "./TimePicker.tsx"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"
import {IEvent} from "../types"
import {DateTime} from "luxon"
import { FC } from "react"
import {useEventEdit} from "../hooks/useEventEdit.tsx"

interface EditModalProps {
    saveChanges: (editedEvent: IEvent, shouldUpdate: boolean) => void;
    event: IEvent;
    close: () => void;
}

export const EditModal: FC<EditModalProps>  = (
    { saveChanges, event, close }
) => {
    const {
        debouncedHandleChange,
        saveChangesDisabled,
        onTimePickerChange,
        eventName,
        time,
        nameChanged,
        timeChanged
    } = useEventEdit(event)

    const save = () => {
        const editedEvent = {
            ...event,
            name: eventName,
            time: time?.toISOTime()
        }
        const shouldUpdate = nameChanged.current || timeChanged.current

        saveChanges(editedEvent, shouldUpdate)
    }

    return (
      <>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Edit an event
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
                      defaultValue={event.name}
                      required
                      onChange={debouncedHandleChange}
                  />
                  <BasicTimePicker
                      value = {DateTime.fromISO(event.time)}
                      setTime = {onTimePickerChange}
                  ></BasicTimePicker>
              </div>
          </DialogContent>
          <DialogActions>
              <Button autoFocus onClick={save} disabled = {saveChangesDisabled}>
                  Save changes
              </Button>
          </DialogActions>
      </>
  )
}
