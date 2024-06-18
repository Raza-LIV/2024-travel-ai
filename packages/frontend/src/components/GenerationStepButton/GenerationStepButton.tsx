import { Button } from "@mui/material";
import React from "react";
import { COLORS } from "../../constants/colors";
import { backButton } from "./GenerationStepButton.styled";
import { useStepperNumber } from "../../store/stepNumber";

interface IProps {
  buttonVisibility: boolean;
  text: string;
  buttonType: "button" | "submit" | "reset" | undefined;
  handleClick: () => void;
  setAppear: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GenerationStepButton = ({
  buttonVisibility,
  text,
  buttonType,
  handleClick,
  setAppear,
}: IProps) => {
  const { stepNumber, decStepNumber } = useStepperNumber();
  const clickBack = () => {
    setAppear(false);
    decStepNumber();
  };
  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => {
          handleClick();
        }}
        style={{
          borderRadius: "10px",
          border: buttonVisibility
            ? `${COLORS.PRIMARY} solid 1px`
            : `${COLORS.PRIMARY_OPAQUE[30]} solid 1px`,
          backgroundColor: buttonVisibility ? COLORS.PRIMARY : COLORS.SECONDARY,
          color: buttonVisibility
            ? COLORS.SECONDARY
            : COLORS.PRIMARY_OPAQUE[30],
          width: "275px",
          height: "45px",
          fontSize: "16px",
          opacity: buttonVisibility ? 1 : 0.6,
          transitionDuration: "500ms",
        }}
        fullWidth
        disabled={!buttonVisibility}
        type={buttonType}
      >
        {text}
      </Button>
      {stepNumber !== 0 && (
        <div className={backButton} onClick={() => clickBack()}>
          Back
        </div>
      )}
    </div>
  );
};
