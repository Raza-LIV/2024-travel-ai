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
} from "./Generation.styled";

export const Generation = () => {
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
            <div className={generationLabel}>
              Please specify the country, state, and city you would like to
              explore
            </div>
            <form className={generationForm}>
              <MobileGenerationInput holdText="Country" />
              <MobileGenerationInput holdText="State" />
              <MobileGenerationInput holdText="City" />
              <div style={{ margin: "0 10px" }}>
                Knowing your desired destination will enable us to create a
                travel itinerary that focuses on the unique attractions,
                landmarks, and experiences available in that specific location.
                Whether it's the bustling streets of a vibrant city or the
                serene landscapes of a picturesque town, we'll ensure your
                itinerary is designed to make the most of your chosen
                destination
              </div>
              <button
                className={isActive() ? generationActive : generationPassive}
                onClick={() => setSt((prev) => prev + 1)}
              >
                Next step
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
