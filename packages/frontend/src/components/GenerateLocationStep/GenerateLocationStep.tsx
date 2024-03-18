import React, { useEffect, useState } from "react";
import {
  container,
  submitContainer,
  inputConteiner,
} from "./GenerateLocationStep.styled";
import { CountrySelector } from "../CountrySelector/CountrySelector";
import { IValues } from "../../pages/GenerationDesktop/GenerationDesktop";
import { useStepperNumber } from "../../store/stepNumber";
import { css } from "@emotion/css";
import { GenerationStepButton } from "../GenerationStepButton/GenerationStepButton";

interface IProps {
  handleChange: any;
  values: IValues;
  setAppear: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GenerateLocationStep = ({
  handleChange,
  values,
  setAppear,
}: IProps) => {
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(false);
  const [appearComponent, setAppearComponent] = useState<boolean>(false);
  const { stepNumber, incStepNumber } = useStepperNumber();
  const { country, state, city } = values;
  const handleClick = () => {
    if (country === "") {
      return false;
    }
    if (state === "") {
      return false;
    }
    if (city === "") {
      return false;
    }
    return true;
  };

  const buttonClickFunction = () => {
    setAppear(false);
    incStepNumber();
  };

  useEffect(() => {
    setButtonVisibility(handleClick());
  }, [country, state, city]);
  useEffect(() => {
    setAppearComponent(true);
  }, []);
  return (
    <div className={container}>
      <div
        className={css(
          inputConteiner,
          `opacity: ${appearComponent ? 1 : 0};
        transition-delay: ${(stepNumber + 2) * 500 + 300}ms`
        )}
      >
        <CountrySelector
          locationValue={values.country}
          handleChange={handleChange("country")}
        />
        <CountrySelector
          locationValue={values.state}
          handleChange={handleChange("state")}
        />
        <CountrySelector
          locationValue={values.city}
          handleChange={handleChange("city")}
        />
      </div>
      <div
        className={css(
          submitContainer,
          `opacity: ${appearComponent ? 1 : 0};
        transition-delay: ${(stepNumber + 3) * 500 + 300}ms`
        )}
      >
        <GenerationStepButton
          buttonVisibility={buttonVisibility}
          text={"Next step"}
          buttonType={"button"}
          handleClick={buttonClickFunction}
          setAppear={setAppear}
        />
      </div>
    </div>
  );
};
