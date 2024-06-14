import {eventsReducer} from "../events-reducer.tsx"
import {Events} from "../../types"
import {initialState} from "../initial-state.ts";
import {EventsActionType} from "../actions.ts";

const localStorageKey = 'eventsState'

const saveStateToLocalStorage = (state: Events) => {
    const serializedState = JSON.stringify(
        Array.from(state.entries(), ([key, value]) => [key, Array.from(value)])
    )
    
    localStorage.setItem(localStorageKey, serializedState)
}

export const loadStateFromLocalStorage = (): Events => {
    const serializedState = localStorage.getItem(localStorageKey)
    
    if (!serializedState) {
        return initialState
    }

    const parsedState = JSON.parse(serializedState)
    return new Map(parsedState.map(([key, value]) => [key, new Set(value)]))
}

export const reducerWithLocalStorage = (state: Events, action: EventsActionType) => {
    const newState = eventsReducer(state, action)
    saveStateToLocalStorage(newState)
    return newState
}