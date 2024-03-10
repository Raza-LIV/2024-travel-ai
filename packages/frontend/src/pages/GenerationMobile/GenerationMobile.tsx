import { useState } from "react";
import { BackIcon } from "../../assets/icons/BackIcon";
import { MobileGenerationInput } from "../../components/MobileGenerationInput/MobileGenerationInput";
import { Stepper } from "../../components/Stepper/Stepper";
import {
  generationPlaceStep,
  generationTab,
  backIcon,
  generationOptiocns,
  stepper,
  content,
  generationLabel,
  generationForm,
  generationPassive,
  generationActive,
} from "./GenerationMobile.styled";
import { TEXT } from "../../constants/text";

export const GenerationMobile = () => {
  const [st, setSt] = useState<number>(0);

  const isActive = () => {
    // checking is values in MobileGenerationInput are empty
    return true;
  };
  return (
    <div>
      <div className={generationPlaceStep}>
        <div className={generationTab}>Generation tab</div>
        <div className={backIcon}>
          <BackIcon />
        </div>
        <div className={generationOptiocns}>
          <div className={stepper}>
            <Stepper stateNumber={st} />
          </div>
          <div className={content}>
            <div className={generationLabel}>{TEXT.GENERATION_PAGE_CREATE}</div>
            <form className={generationForm}>
              <MobileGenerationInput holdText="Country" />
              <MobileGenerationInput holdText="State" />
              <MobileGenerationInput holdText="City" />
              <div style={{ margin: "0 10px" }}>
                {TEXT.GENERATION_PAGE_DESCRIPTION}
              </div>
              <button
                className={isActive() ? generationActive : generationPassive}
                onClick={() => setSt((prev) => prev + 1)}
              >
                {TEXT.NEXT_STEP}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
