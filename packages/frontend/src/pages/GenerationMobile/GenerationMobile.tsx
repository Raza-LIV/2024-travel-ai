import React from "react";
import { BackIcon } from "../../assets/icons/BackIcon";
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
import { IPasteContent, IValues } from "../GenerationDesktop/GenerationDesktop";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/roures";

interface IProps {
  appear: boolean;
  values: IValues;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  pasteContent: IPasteContent;
}

export const GenerationMobile = ({
  appear,
  values,
  handleSubmit,
  pasteContent,
}: IProps) => {
  const navigation = useNavigate();
  return (
    <div>
      <div className={generationPlaceStep}>
        <div className={generationTab}>Generation tab</div>
        <div className={backIcon} onClick={() => navigation(ROUTES.HOME)}>
          <BackIcon />
        </div>
        <div className={generationOptiocns}>
          <div className={stepper}>
            <Stepper />
          </div>
          <form className={content} onSubmit={handleSubmit}>
            <GenerationStepContent
              appear={appear}
              content={pasteContent}
              values={values}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
