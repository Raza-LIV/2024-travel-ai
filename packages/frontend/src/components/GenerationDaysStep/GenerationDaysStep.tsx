import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  calendarContainer,
  submitContainer,
} from "./GenerationDaysStep.styled";
import { COLORS } from "../../constants/colors";
import { IValues } from "../../pages/GenerationDesktop/GenerationDesktop";
import { FormikErrors } from "formik";
import { useStepperNumber } from "../../store/stepNumber";
import dayjs from "dayjs";
import { css } from "@emotion/css";
import { GenerationStepButton } from "../GenerationStepButton/GenerationStepButton";

interface IProps {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IValues>>;
  values: IValues;
  currentDate: dayjs.Dayjs;
  setAppear: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GenerationDaysStep = ({
  setFieldValue,
  values,
  currentDate,
  setAppear,
}: IProps) => {
  const { stepNumber, incStepNumber } = useStepperNumber();
  const [appearComponent, setAppearComponent] = useState<boolean>(false);
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(false);
  const handleClick = () => {
    if (values.date.isBefore(currentDate)) {
      return false;
    } else if (values.date.isAfter(currentDate)) {
      return true;
    }
    return false;
  };
  const buttonClickFunction = () => {
    setAppear(false);
    incStepNumber();
  };
  useEffect(() => {
    setButtonVisibility(handleClick());
  }, [values.date]);
  useEffect(() => {
    setAppearComponent(true);
  }, []);
  return (
    <div
      className={css(
        calendarContainer,
        `
        opacity: ${appearComponent ? 1 : 0};
        transition-delay: ${(stepNumber + 2) * 500 + 300}ms
        `
      )}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          onChange={(newValue) => setFieldValue("date", newValue)}
          sx={{
            border: `1px solid ${COLORS.PRIMARY_OPAQUE[60]}`,
            borderRadius: "10px",
          }}
        />
      </LocalizationProvider>
      <div
        className={css(
          submitContainer,
          `
          opacity: ${appearComponent ? 1 : 0};
          transition-delay: ${(stepNumber + 3) * 500 + 300}ms
          `
        )}
      >
        <GenerationStepButton
          buttonVisibility={buttonVisibility}
          text={"Next step"}
          buttonType={"button"}
          handleClick={buttonClickFunction}
          setAppear={setAppear}
        />
      </div>
    </div>
  );
};
