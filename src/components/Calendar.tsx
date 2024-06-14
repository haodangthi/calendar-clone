import {CSSTransition, SwitchTransition} from "react-transition-group"
import {Day} from "./Day.tsx"
import {memo, useRef} from "react"
import {IDay} from "../types"
import {useDays} from "../hooks/useDates.tsx"
import {DateTime} from "luxon"
import {useEventsContext} from "../context";

const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

const Calendar = memo((
    {
        isForward,
        currentDay,
        handleDayClick
    }:
        {
            isForward: boolean,
            currentDay: DateTime,
            handleDayClick: (day: IDay) => void
        }
) => {
    const calendarRef = useRef(null)
    const days: IDay[] = useDays(currentDay)
    const { events } = useEventsContext()


    return (
      <SwitchTransition mode={'out-in'}>
          <CSSTransition
              nodeRef={calendarRef}
              key={currentDay.toString()}
              timeout={500}
              in={true}
              appear={true}
              classNames= {isForward ? 'next' : 'prev'}
              unmountOnExit
          >
              <div ref={calendarRef}>
                  <div className="weekdays">
                      {weekdays.map((day) => (
                          <div key={day} className="weekday">
                              {day}
                          </div>
                      ))}
                  </div>
                  <div className="calendar">
                      {days.map((day) => (
                          <Day events = {events} day={day} key = {day.dayId} openAddEventModal = {() => handleDayClick(day)}/>
                      ))}
                  </div>
              </div>
          </CSSTransition>
      </SwitchTransition>
  )
})

export default Calendar