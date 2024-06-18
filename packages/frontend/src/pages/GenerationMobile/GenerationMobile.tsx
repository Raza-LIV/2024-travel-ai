import React from "react";
import { Stepper } from "../../components/Stepper/Stepper";
import {
  generationPlaceStep,
  generationTab,
  backIcon,
  generationOptiocns,
  stepper,
  content,
} from "./GenerationMobile.styled";
import { GenerationStepContent } from "../../components/GenerationStepContent/GenerationStepContent";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/roures";
import { IValues } from "../../types/generation.types";
import { ICON_SIZE } from "../../constants/iconSize";
import { COLORS } from "../../constants/colors";
import { IconBack } from "../../assets/icons/IconBack";

interface IProps {
  appear: boolean;
  values: IValues;
  handleSubmit: () => void;
  pasteContent: React.ReactNode[];
}

export const GenerationMobile = ({ handleSubmit, pasteContent }: IProps) => {
  const navigation = useNavigate();
  return (
    <div>
      <div className={generationPlaceStep}>
        <div className={generationTab}>Generation tab</div>
        <div className={backIcon} onClick={() => navigation(ROUTES.HOME)}>
          <IconBack color={COLORS.SECONDARY} size={ICON_SIZE[40]} />
        </div>
        <div className={generationOptiocns}>
          <div className={stepper}>
            <Stepper />
          </div>
          <form className={content} onSubmit={handleSubmit}>
            <GenerationStepContent content={pasteContent} />
          </form>
        </div>
      </div>
    </div>
  );
};
