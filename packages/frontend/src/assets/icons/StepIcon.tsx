import { CorrectIcon } from "./CorrectIcon";
import { QuestIcon } from "./QuestIIcon";
import { IStepIcon } from "../../types/icon.types";
import { ICON_SIZE } from "../../constants/iconSize";

export enum EStepperIconState {
  CURRENT = "current",
  PASSED = "passed",
  UNKNOWN = "unknown",
}

export const StepIcon = ({ icon, state }: IStepIcon) => {
  const chooseIcon = () => {
    if (state === EStepperIconState.PASSED)
      return <CorrectIcon size={ICON_SIZE[35]} />;
    if (state === EStepperIconState.CURRENT) return icon;
    if (state === EStepperIconState.UNKNOWN) return <QuestIcon />;
  };

  return <>{chooseIcon()}</>;
};
