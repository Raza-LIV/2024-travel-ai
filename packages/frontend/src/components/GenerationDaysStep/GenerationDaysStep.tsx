import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  calendarContainer,
  submitContainer,
} from "./GenerationDaysStep.styled";
import { COLORS } from "../../constants/colors";
import { Button } from "@mui/material";
import { IValues } from "../../pages/GenerationDesktop/GenerationDesktop";
import { FormikErrors } from "formik";

interface IProps {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IValues>>;
  values: IValues;
}

export const GenerationDaysStep = ({ setFieldValue, values }: IProps) => {
  return (
    <div className={calendarContainer}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          onChange={(newValue) => setFieldValue("date", newValue)}
          value={values.date}
          sx={{
            border: `1px solid ${COLORS.PRIMARY_OPAQUE[60]}`,
            borderRadius: "10px",
          }}
        />
      </LocalizationProvider>
      <div className={submitContainer}>
        <Button
          variant="outlined"
          style={{
            borderRadius: "10px",
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.SECONDARY,
            width: "275px",
            height: "45px",
            fontSize: "16px",
            margin: "20px 0 0 0",
          }}
          fullWidth
          type="submit"
        >
          Next step
        </Button>
      </div>
    </div>
  );
};
