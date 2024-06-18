import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { COLORS } from "../../constants/colors";
import { FormikErrors } from "formik";
import { IModalValues } from "../ModalContent/ModalContent";

interface IProps {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IModalValues>>;
}

export const DateContent = ({ setFieldValue }: IProps) => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          onChange={(savedValue) =>
            setFieldValue("date", savedValue.format("YYYY-MM-DD"))
          }
          sx={{
            // width: "100%",
            width: "348px",
            border: `1px solid ${COLORS.PRIMARY}`,
            borderRadius: "10px",
          }}
        />
      </LocalizationProvider>
    </div>
  );
};
