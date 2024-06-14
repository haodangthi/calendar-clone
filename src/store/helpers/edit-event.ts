import {Events, IEvent} from "../../types"
import {sortTimeUTC} from "../../utils"

export const editEvent = (state: Events, event: IEvent) => {
    const prevEvents = state.get(event.dayId)

    if (!prevEvents) return state


    const updatedEvents = [...prevEvents].map(e => {
        if (e.id === event.id) {
            return {
                ...e,
                ...event
            }
        }

        return e
    }).sort((a, b) => sortTimeUTC(a.time, b.time))

    state.set(event.dayId, new Set(updatedEvents))

    return new Map(state)
}
