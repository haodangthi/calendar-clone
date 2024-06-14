import {IEvent} from "../types"
import {memoized as EventModal} from "./EventModal.tsx"
import {useCallback, useState} from "react"

export const Event= ({ data }: {
    data: IEvent,
}) => {
    const [open, setOpen] = useState(false)
    const handleClick = (event: MouseEvent) => {
        event.stopPropagation()

        setOpen(true)
    }

    const close = useCallback(() => setOpen(false), [])

    return (
        <>
            <div className="event" onClick={handleClick}>
                {data.name}
            </div>
            <EventModal
                close={close}
                open = {open}
                event={data}
            />
        </>
    )
}