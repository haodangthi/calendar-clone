import {Events, IDay, IEvent} from "../types"
import { Event } from './Event.tsx'

export const Day = ({ day, openAddEventModal, events }: {
    day: IDay,
    openAddEventModal: () => void,
    events: Events}
) => {
    const dayEvents: IEvent[] = Array.from(events.get(day.dayId) || [])

    return (
        <>
            <div className="calendar-day" onClick={openAddEventModal}>
                {day.data.toFormat('dd')}

                { dayEvents?.length ? dayEvents.map(event => {
                    return (<Event
                        key={event.time}
                        data={event}></Event>)
                }): null}

                {/*<div className="event">*/}
                {/*    more ..*/}
                {/*</div>*/}
            </div>
        </>
    )
}