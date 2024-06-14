import {Events, IEvent} from "../../types"

export const deleteEvent = (state: Events, event: IEvent) => {
    const prevEvents = state.get(event.dayId)

    if (!prevEvents) return state

    prevEvents.delete(event)

    // const newEvents = [...prevEvents].filter(e => e.id !== event.id)

    state.set(event.dayId, new Set(prevEvents))

    return new Map(state)
}