import { Suspense, lazy, useCallback, useState } from "react";

import { DateTime } from "luxon";

import Button from "@mui/material/Button";

import "./App.css";
import { AddEventModal } from "./components/AddEventModal.tsx";
import { EventsContextProvider } from "./context/EventContext.tsx";
import { IDay } from "./types";

const Calendar = lazy(() => import("./components/Calendar.tsx"));

function App() {
  const [currentDay, setCurrentDay] = useState(DateTime.local());
  const currentMonth = currentDay.monthLong;

  const [open, setOpen] = useState(false);
  const [isForward, setIsForward] = useState(true);

  const [chosenDay, setChosenDay] = useState<IDay | null>(null);

  const openAddEventModal = useCallback((day: IDay) => {
    setChosenDay(day);
    setOpen(true);
  }, []);
  const nextMonth = () => {
    setIsForward(true);
    setCurrentDay((prev) => {
      const nextMonthDay = prev.plus({ months: 1 });

      return nextMonthDay;
    });
  };

  const prevMonth = () => {
    setIsForward(false);
    setCurrentDay((prev) => {
      const prevMonthDay = prev.minus({ months: 1 });

      return prevMonthDay;
    });
  };

  return (
    <>
      <div className="navbar">
        <Button onClick={prevMonth} variant="outlined">
          Previous Month
        </Button>
        <span>{currentMonth}</span>
        <Button onClick={nextMonth} variant="outlined">
          Next Month
        </Button>
      </div>
      <Suspense fallback={<div>Loading Calendar...</div>}>
        <Calendar
          isForward={isForward}
          currentDay={currentDay}
          handleDayClick={openAddEventModal}
        />
      </Suspense>

      <AddEventModal
        open={open}
        setOpen={setOpen}
        chosenDay={chosenDay}
      ></AddEventModal>
    </>
  );
}

const AppWithProvider = () => (
  <EventsContextProvider>
    <App />
  </EventsContextProvider>
);

export default AppWithProvider;
