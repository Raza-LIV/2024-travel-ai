import React, { useEffect, useState } from "react";
import {
  container,
  submitContainer,
  choiseContainer,
} from "./GenerationFoodStep.styled";
import { ChooseInterests } from "../ChooseInterests/ChooseInterests";
import { CorrectIcon } from "../../assets/icons/CorrectIcon";
import { ICON_SIZE } from "../../constants/iconSize";
import { TEXT } from "../../constants/text";
import { FormikErrors } from "formik";
import { IValues } from "../../pages/GenerationDesktop/GenerationDesktop";
import { NoIcon } from "../../assets/icons/NoIcon";
import { useStepperNumber } from "../../store/stepNumber";
import { useChoise } from "../../store/choise";
import { css } from "@emotion/css";
import { GenerationStepButton } from "../GenerationStepButton/GenerationStepButton";

interface IProps {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IValues>>;
  values: IValues;
  setAppear: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GenerationFoodStep = ({
  setFieldValue,
  values,
  setAppear,
}: IProps) => {
  const { stepNumber, incStepNumber } = useStepperNumber();
  const [appearComponent, setAppearComponent] = useState<boolean>(false);
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(false);
  const { chooseNo1, chooseYes1, setChooseNo1, setChooseYes1 } = useChoise();
  const handleClick = () => {
    if (values.food === null) {
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
  }, [values.food]);
  useEffect(() => {
    setAppearComponent(true);
  });
  return (
    <div className={container}>
      <div
        className={css(
          choiseContainer,
          `
          opacity: ${appearComponent ? 1 : 0};
          transition-delay: ${(stepNumber + 2) * 500 + 300}ms
          `
        )}
      >
        <ChooseInterests
          icon={<NoIcon size={ICON_SIZE[50]} />}
          answer={TEXT.CHOOSE_NO}
          text={TEXT.STEP_FOOD_CHOOSE_NO}
          setFieldValue={setFieldValue}
          valueField={false}
          character={"food"}
          state={chooseNo1}
          setState={setChooseNo1}
          setOppositeState={setChooseYes1}
        />
        <ChooseInterests
          icon={<CorrectIcon size={ICON_SIZE[60]} />}
          answer={TEXT.CHOOSE_YES}
          text={TEXT.STEP_FOOD_CHOOSE_YES}
          setFieldValue={setFieldValue}
          valueField={true}
          character={"food"}
          state={chooseYes1}
          setState={setChooseYes1}
          setOppositeState={setChooseNo1}
        />
      </div>
      <div
        className={css(
          submitContainer,
          `
          opacity: ${appearComponent ? 1 : 0};
          transition-delay: ${(stepNumber + 3) * 500 + 300}ms
          `
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
