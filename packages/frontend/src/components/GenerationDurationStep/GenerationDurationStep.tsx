import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { COLORS } from "../../constants/colors";
import { submitContainer, container } from "./GenerationDurationStep.styled";
import { IValues } from "../../pages/GenerationDesktop/GenerationDesktop";
import { useStepperNumber } from "../../store/stepNumber";
import { css } from "@emotion/css";
import { GenerationStepButton } from "../GenerationStepButton/GenerationStepButton";

interface IProps {
  handleChange: any;
  values: IValues;
  setAppear: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GenerationDurationStep = ({
  handleChange,
  values,
  setAppear,
}: IProps) => {
  const { stepNumber, incStepNumber } = useStepperNumber();
  const [appearComponent, setAppearComponent] = useState<boolean>(false);
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(false);
  const handleClick = () => {
    if (values.duration === null) {
      return false;
    }
    if (values.duration < 1) {
      return false;
    }
    if (Number.isInteger(values.duration) !== true) {
      return false;
    }
    return true;
  };
  const buttonClickFunction = () => {
    setAppear(false);
    incStepNumber();
  };
  useEffect(() => {
    setButtonVisibility(handleClick());
  }, [values.duration]);
  useEffect(() => {
    setAppearComponent(true);
  }, []);
  return (
    <div
      className={css(
        container,
        `
        opacity: ${appearComponent ? 1 : 0};
        transition-delay: ${(stepNumber + 2) * 500 + 300}ms
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
