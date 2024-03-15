import React, { useEffect, useState } from "react";
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
import { useStepperNumber } from "../../store/stepNumber";
import dayjs from "dayjs";

interface IProps {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IValues>>;
  values: IValues;
  currentDate: dayjs.Dayjs;
}

export const GenerationDaysStep = ({
  setFieldValue,
  values,
  currentDate,
}: IProps) => {
  const { incStepNumber } = useStepperNumber();
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(false);
  const handleClick = () => {
    if (values.date.isBefore(currentDate)) {
      return false;
    } else if (values.date.isAfter(currentDate)) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    setButtonVisibility(handleClick());
  });
  return (
    <div className={calendarContainer}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          onChange={(newValue) => setFieldValue("date", newValue)}
          sx={{
            border: `1px solid ${COLORS.PRIMARY_OPAQUE[60]}`,
            borderRadius: "10px",
          }}
        />
      </LocalizationProvider>
      <div className={submitContainer}>
        <Button
          variant="outlined"
          onClick={incStepNumber}
          style={{
            borderRadius: "10px",
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.SECONDARY,
            width: "275px",
            height: "45px",
            fontSize: "16px",
            margin: "20px 0 0 0",
            opacity: `${buttonVisibility ? 1 : 0.6}`,
          }}
          fullWidth
          disabled={!buttonVisibility}
        >
          Next step
        </Button>
      </div>
    </div>
  );
};
