import Dialog from "@mui/material/Dialog"
import {IEvent} from "../types"
import {EditModal} from "./EditModal.tsx"
import {memo, useState} from "react"
import {EventDisplayModal} from "./EventDisplayModal.tsx"
import { useEventsContext} from "../context"
import {EventsAction} from "../store/actions.ts"

const EventModal = ({
    event,
    open,
    close
}: {
    event: IEvent,
    open: boolean,
    close: () => void,
}) => {
    const [isEdit, setIsEdit] = useState(false)
    const { dispatchEvents } = useEventsContext()
    const handleClick: any = (event: Event) => {
        event.stopPropagation()
    }

    const switchToEdit = () => {
        setIsEdit(true)
    }

    const saveChanges = (editedEvent: IEvent, shouldUpdate: boolean) => {
        setIsEdit(false)

        if (shouldUpdate) {
            dispatchEvents({
                type: EventsAction.edit,
                payload: editedEvent
            })
        }

    }

  return (
      <Dialog
          onClick = {handleClick}
          open={open}
          onClose={close}
          aria-labelledby="responsive-dialog-title"
      >
          {
              isEdit
                  ? <EditModal
                  saveChanges = {saveChanges}
                  event = {event}
                  close = {close}
                  ></EditModal>
                  : <EventDisplayModal
                      event={event}
                      close = {close}
                      switchToEdit={switchToEdit}/>
          }


      </Dialog>
  )
}

export const memoized = memo(EventModal)