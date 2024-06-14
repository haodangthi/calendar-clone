import {Events, IEvent} from "../../types"
import {sortTimeUTC} from "../../utils"

export const addNewEvent = (state: Events, newEvent: IEvent) => {
    const prevEvents = state.get(newEvent.dayId) || []
    const newEvents = [...prevEvents, newEvent].sort((a, b) => sortTimeUTC(a.time, b.time))

    state.set(newEvent.dayId, new Set(newEvents))

    return new Map(state)
}