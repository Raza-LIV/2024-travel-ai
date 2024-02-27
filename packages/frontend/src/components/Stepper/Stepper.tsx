import { useEffect, useState } from "react";
import { ArtIcon } from "../../assets/icons/ArtIcon";
import { DateIcon } from "../../assets/icons/DateIcon";
import { FoodIcon } from "../../assets/icons/FoodIcon";
import { PeriodIcon } from "../../assets/icons/PeriodIcon";
import { PlaceIcon } from "../../assets/icons/PlaceIcon";
import { EStepperIconState, StepIcon } from "../../assets/icons/StepIcon";
import { COLORS } from "../../constants/colors";
import { container, divider, mainStep, step } from "./Stepper.styled";
import { css } from "@emotion/css";

interface IProps {
  stateNumber: number;
}

interface ISteps {
  0: EStepperIconState;
  1: EStepperIconState;
  2: EStepperIconState;
  3: EStepperIconState;
  4: EStepperIconState;
}

export const Stepper = ({ stateNumber }: IProps) => {
  const [steps, setSteps] = useState<ISteps>({
    0: EStepperIconState.UNKNOWN,
    1: EStepperIconState.UNKNOWN,
    2: EStepperIconState.UNKNOWN,
    3: EStepperIconState.UNKNOWN,
    4: EStepperIconState.UNKNOWN,
  });
  useEffect(() => {
    setSteps((prev) => {
      const updatedSteps: ISteps = { ...prev };

      Object.keys(updatedSteps).forEach((key) => {
        const numKey = parseInt(key);
        if (numKey < stateNumber) {
          updatedSteps[numKey as keyof ISteps] = EStepperIconState.PASSED;
        }
        if (numKey === stateNumber) {
          updatedSteps[numKey as keyof ISteps] = EStepperIconState.CURRENT;
        }
        if (numKey > stateNumber) {
          updatedSteps[numKey as keyof ISteps] = EStepperIconState.UNKNOWN;
        }
      });
      return updatedSteps;
    });
  }, [stateNumber]);
  return (
    <div className={container}>
      <div className={stateNumber === 0 ? mainStep : step}>
        <StepIcon icon={<PlaceIcon />} state={steps[0]} />
      </div>
      <div
        className={css([
          divider,
          `background-color: ${
            stateNumber > 0 ? COLORS.PRIMARY : COLORS.PRIMARY_OPAQUE[30]
          }`,
        ])}
      ></div>
      <div className={stateNumber === 1 ? mainStep : step}>
        <StepIcon icon={<DateIcon />} state={steps[1]} />
      </div>
      <div
        className={css([
          divider,
          `background-color: ${
            stateNumber > 1 ? COLORS.PRIMARY : COLORS.PRIMARY_OPAQUE[30]
          }`,
        ])}
      ></div>
      <div className={stateNumber === 2 ? mainStep : step}>
        <StepIcon icon={<PeriodIcon />} state={steps[2]} />
      </div>
      <div
        className={css([
          divider,
          `background-color: ${
            stateNumber > 2 ? COLORS.PRIMARY : COLORS.PRIMARY_OPAQUE[30]
          }`,
        ])}
      ></div>
      <div className={stateNumber === 3 ? mainStep : step}>
        <StepIcon icon={<FoodIcon />} state={steps[3]} />
      </div>
      <div
        className={css([
          divider,
          `background-color: ${
            stateNumber > 3 ? COLORS.PRIMARY : COLORS.PRIMARY_OPAQUE[30]
          }`,
        ])}
      ></div>
      <div className={stateNumber === 4 ? mainStep : step}>
        <StepIcon icon={<ArtIcon />} state={steps[4]} />
      </div>
    </div>
  );
};
