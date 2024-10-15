import { useRef } from "react";

import { DateTime } from "luxon";

import { IDay } from "../types";

const MONTH_ID_FORMAT: string = "yyyy-LL";
export const useDays = (today = DateTime.local()): IDay[] => {
  const monthId = today.toFormat(MONTH_ID_FORMAT);

  const daysCache = useRef<any>({});

  if (daysCache.current[monthId]) {
    return daysCache.current[monthId];
  }

  const firstDayOfMonth = today.startOf("month");

  const firstDayOfWeek = firstDayOfMonth.weekday;

  const daysFromPreviousMonth = firstDayOfWeek - 1;

  const startDate = firstDayOfMonth.minus({ days: daysFromPreviousMonth });

  daysCache.current[monthId] = getMonthDays(startDate);
  return daysCache.current[monthId];
};

function getMonthDays(startDate: DateTime) {
  const days: IDay[] = [];

  for (let index = 0; index < 35; index++) {
    const data = startDate.plus({ days: index });

    const day: IDay = {
      data,
      dayId: data.toISODate() || "",
    };

    days.push(day);
  }

  return days;
}
