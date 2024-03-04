import { ReactNode } from "react";
import { CorrectIcon } from "./CorrectIcon";
import { QuestIcon } from "./QuestIIcon";

export enum EStepperIconState {
  CURRENT = "current",
  PASSED = "passed",
  UNKNOWN = "unknown",
}

interface IProps {
  icon: ReactNode;
  state: EStepperIconState;
}

export const StepIcon = ({ icon, state }: IProps) => {
  const chooseIcon = () => {
    if (state === EStepperIconState.PASSED) return <CorrectIcon />;
    if (state === EStepperIconState.CURRENT) return icon;
    if (state === EStepperIconState.UNKNOWN) return <QuestIcon />;
  };

  return <>{chooseIcon()}</>;
};
