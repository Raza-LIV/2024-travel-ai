import { useEffect, useState } from "react";
import { COLORS } from "../../constants/colors";
import { TextField } from "@mui/material";
import { IModalValues } from "../ModalContent/ModalContent";
import { useTravelModal } from "../../store/travelModal";
import { FormikErrors } from "formik";
import { useSavedValues } from "../../store/savedInitialValues";

interface IProps {
  handleChange: any;
  values: IModalValues;
  setValues: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IModalValues>>;
}

export const DurationContent = ({
  handleChange,
  values,
  setValues,
}: IProps) => {
  const { isModalVisible } = useTravelModal();
  const { savedDuration } = useSavedValues();
  useEffect(() => {
    setValues("duration", savedDuration ?? "");
    isModalVisible
      ? values.duration && setLabelPosition(true)
      : setLabelPosition(false);
  }, [isModalVisible]);
  const [labelPosition, setLabelPosition] = useState<boolean>(false);
  return (
    <div>
      <TextField
        onKeyDown={(e) => {
          const key = e.key;
          if (
            !/^\d$/.test(key) &&
            !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(key)
          ) {
            e.preventDefault();
          }
        }}
        onChange={handleChange("duration")}
        onFocus={() => {
          setLabelPosition(true);
        }}
        onBlur={() => {
          if (!values.duration) {
            setLabelPosition(false);
          }
        }}
        value={values.duration}
        id="demo-helper-text-misaligned-no-helper"
        label="Days"
        type="number"
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "10px",
          border: `1px solid ${COLORS.PRIMARY}`,
          height: "45px",
          outline: "none",
          boxShadow: "none",
          "& fieldset": { border: "none" },

          "& input": {
            "-moz-appearance": "textfield",
          },
          "& input::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
          "& input::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0,
          },
        }}
        InputProps={{ sx: { fontSize: "20px", color: COLORS.PRIMARY } }}
        InputLabelProps={{
          sx: {
            top: "-8px",
            backgroundColor: "#fff",
            fontSize: "20px",
            color: `${COLORS.PRIMARY_OPAQUE[60]} !important`,
          },
          shrink: labelPosition,
        }}
      />
    </div>
  );
};
