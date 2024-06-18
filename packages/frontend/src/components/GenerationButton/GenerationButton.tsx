import { Button } from "@mui/material";
import { COLORS } from "../../constants/colors";
import { backButton } from "./GenerationButton.styled";
import { useStepperNumber } from "../../store/stepNumber";

interface IProps {
  buttonVisibility: boolean;
  index: number;
}

export const GenerationButton = ({ buttonVisibility, index }: IProps) => {
  const { stepNumber, decStepNumber, incStepNumber } = useStepperNumber();
  const clickBack = () => {
    decStepNumber();
  };
  const handleClick = () => {
    if (stepNumber !== 4) {
      incStepNumber();
    }
    if (stepNumber === 4) {
      // incStepNumber();
    }
  };
  const textFunction = (index: number) => {
    if (index === 4) return "Submit";
    return "Next step";
  };
  const typeFunction = (index: number) => {
    if (index === 4) return "submit";
    return "button";
  };
  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => {
          index !== 4 && handleClick();
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
        type={typeFunction(index)}
      >
        {textFunction(index)}
      </Button>
      {stepNumber !== 0 && (
        <div className={backButton} onClick={() => clickBack()}>
          Back
        </div>
      )}
    </div>
  );
};
