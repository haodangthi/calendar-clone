import TextField from "@mui/material/TextField";
import { DesktopTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

export const BasicTimePicker = ({ setTime, value }: any) => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DesktopTimePicker
        defaultValue={value} //
        label="For desktop"
        onChange={setTime}
        // @ts-expect-error render input is deprecated
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

//DateTime.fromISO("03:15:00.000+03:00")
