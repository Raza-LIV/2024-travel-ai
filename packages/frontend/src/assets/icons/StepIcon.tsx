import { CorrectIcon } from "./CorrectIcon";
import { QuestIcon } from "./QuestIIcon";
import { IStepIcon } from "../../types/icon.types";

export enum EStepperIconState {
  CURRENT = "current",
  PASSED = "passed",
  UNKNOWN = "unknown",
}

export const StepIcon = ({ icon, state }: IStepIcon) => {
  const chooseIcon = () => {
    if (state === EStepperIconState.PASSED) return <CorrectIcon />;
    if (state === EStepperIconState.CURRENT) return icon;
    if (state === EStepperIconState.UNKNOWN) return <QuestIcon />;
  };

  return <>{chooseIcon()}</>;
};
