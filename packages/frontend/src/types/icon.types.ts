import { ReactNode } from "react";
import { EStepperIconState } from "../assets/icons/StepIcon";

export interface ICurrentIcon {
  isPrimaryColor?: boolean;
  isLiked?: boolean;
  size: string;
}

export interface IStepIcon {
  icon: ReactNode;
  state: EStepperIconState;
}

export interface IStyledIcon {
  color: string;
  size: string;
}
