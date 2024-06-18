import { css } from "@emotion/css";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { useGetWidth } from "../../hooks/get-width.hook";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { COLORS } from "../../constants/colors";
import { FormikErrors } from "formik";
import { calendarContainer } from "./DateStep.styled";
import { IValues } from "../../types/generation.types";

interface IProps {
  appearComponent: boolean;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IValues>>;
}

export const DateStep = ({ appearComponent, setFieldValue }: IProps) => {
  const { windowSize } = useGetWidth();
  return (
    <div
      className={css(
        calendarContainer,
        `opacity: ${appearComponent ? 1 : 0};
        transition-delay: ${windowSize <= 1190 ? 800 : 1800}ms;`
      )}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          onChange={(newValue) =>
            setFieldValue("date", newValue.format("YYYY-MM-DD"))
          }
          sx={{
            border: `1px solid ${COLORS.PRIMARY_OPAQUE[60]}`,
            borderRadius: "10px",
          }}
        />
      </LocalizationProvider>
    </div>
  );
};
