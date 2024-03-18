import React, { useEffect, useState } from "react";
import { ChooseInterests } from "../ChooseInterests/ChooseInterests";
import { NoIcon } from "../../assets/icons/NoIcon";
import { TEXT } from "../../constants/text";
import { CorrectIcon } from "../../assets/icons/CorrectIcon";
import {
  choiseContainer,
  container,
  submitContainer,
} from "./GenerationArtStep.styled";
import { ICON_SIZE } from "../../constants/iconSize";
import { FormikErrors } from "formik";
import { IValues } from "../../pages/GenerationDesktop/GenerationDesktop";
import { useChoise } from "../../store/choise";
import { css } from "@emotion/css";
import { GenerationStepButton } from "../GenerationStepButton/GenerationStepButton";
import { useStepperNumber } from "../../store/stepNumber";

interface IProps {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IValues>>;
  values: IValues;
  setAppear: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GenerationArtStep = ({
  setFieldValue,
  values,
  setAppear,
}: IProps) => {
  const { chooseNo2, chooseYes2, setChooseNo2, setChooseYes2 } = useChoise();
  const { stepNumber } = useStepperNumber();
  const [appearComponent, setAppearConponent] = useState<boolean>(false);
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(false);
  const handleClick = () => {
    if (values.art === null) {
      return false;
    }
    return true;
  };
  useEffect(() => {
    setButtonVisibility(handleClick());
  });
  useEffect(() => {
    setAppearConponent(true);
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
          character={"art"}
          state={chooseNo2}
          setState={setChooseNo2}
          setOppositeState={setChooseYes2}
        />
        <ChooseInterests
          icon={<CorrectIcon size={ICON_SIZE[60]} />}
          answer={TEXT.CHOOSE_YES}
          text={TEXT.STEP_FOOD_CHOOSE_YES}
          setFieldValue={setFieldValue}
          valueField={true}
          character={"art"}
          state={chooseYes2}
          setState={setChooseYes2}
          setOppositeState={setChooseNo2}
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
          text={"Submit"}
          buttonType={"submit"}
          handleClick={handleClick}
          setAppear={setAppear}
        />
      </div>
    </div>
  );
};
