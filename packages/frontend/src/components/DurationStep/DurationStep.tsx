import { css } from "@emotion/css";
import React from "react";
import { useGetWidth } from "../../hooks/get-width.hook";
import { COLORS } from "../../constants/colors";
import { TextField } from "@mui/material";
import { IValues } from "../../pages/GenerationDesktop/GenerationDesktop";
import { container } from "./DurationStep.styled";

interface IProps {
  appearComponent: boolean;
  handleChange: any;
  values: IValues;
}

export const DurationStep = ({
  appearComponent,
  handleChange,
  values,
}: IProps) => {
  const { windowSize } = useGetWidth();
  return (
    <div
      className={css(
        container,
        `
              opacity: ${appearComponent ? 1 : 0};
              transition-delay: ${windowSize <= 1190 ? 800 : 1800}ms;
              `
      )}
    >
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
          width: `${windowSize <= 1190 ? windowSize - 20 : 275}px`,
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
    </div>
  );
};
