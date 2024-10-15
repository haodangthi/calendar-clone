import { ChangeEvent, useEffect, useRef, useState } from "react";

import { DateTime } from "luxon";

import { IEvent } from "../types";
import { useDebounce } from "./useDebounce.tsx";

export const useEventEdit = (initialEvent: IEvent) => {
  const [eventName, setEventName] = useState<string>(() => initialEvent.name);
  const [time, setTime] = useState<DateTime | null>(() =>
    DateTime.fromISO(initialEvent.time),
  );

  const nameChanged = useRef<boolean>();
  const timeChanged = useRef<boolean>();

  useEffect(() => {
    nameChanged.current = eventName !== initialEvent.name;
    timeChanged.current = time?.toISOTime() !== initialEvent.time;
  }, [eventName, time]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEventName(event.target.value);
  };

  const debouncedHandleChange = useDebounce(handleChange, 300);

  const onTimePickerChange = (value: DateTime) => {
    setTime(value);
  };

  return {
    debouncedHandleChange,
    onTimePickerChange,
    eventName,
    setEventName,
    time,
    setTime,
    nameChanged,
    timeChanged,
  };
};
