import { ReactNode } from "react";
import { EStepperIconState } from "../assets/icons/StepIcon";

export interface ICurrentIcon {
  isPrimaryColor?: boolean;
  size: string;
}

export interface IStepIcon {
  icon: ReactNode;
  state: EStepperIconState;
}
