import React from "react";
import { Button, TextField } from "@mui/material";
import { COLORS } from "../../constants/colors";
import { submitContainer, container } from "./GenerationDurationStep.styled";
import { IValues } from "../../pages/GenerationDesktop/GenerationDesktop";
import { useStepperNumber } from "../../store/stepNumber";

interface IProps {
  handleChange: any;
  values: IValues;
}

export const GenerationDurationStep = ({ handleChange, values }: IProps) => {
  const { incStepNumber } = useStepperNumber();
  return (
    <div className={container}>
      <TextField
        onChange={handleChange("duration")}
        value={values.duration}
        id="demo-helper-text-misaligned-no-helper"
        label="Days"
        type="number"
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "10px",
          border: `1px solid ${COLORS.PRIMARY}`,
          width: "100px",
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
        }}
      />
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
          }}
          fullWidth
          type="button"
        >
          Next step
        </Button>
      </div>
    </div>
  );
};
