import { useCallback, useState } from "react";

import { IEvent } from "../types";
import { memoized as EventModal } from "./EventModal.tsx";

export const Event = ({ data }: { data: IEvent }) => {
  const [open, setOpen] = useState(false);
  const handleClick: any = (event: MouseEvent) => {
    event.stopPropagation();

    setOpen(true);
  };

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <div className="event" onClick={handleClick}>
        {data.name}
      </div>
      <EventModal close={close} open={open} event={data} />
    </>
  );
};
