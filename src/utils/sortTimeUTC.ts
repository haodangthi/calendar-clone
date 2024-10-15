import { DateTime } from "luxon";

export const sortTimeUTC = (a: string, b: string) => {
  return DateTime.fromISO(a).toMillis() - DateTime.fromISO(b).toMillis();
};
