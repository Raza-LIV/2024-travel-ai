import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { COLORS } from "../../constants/colors";
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

interface IProps {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IValues>>;
  values: IValues;
}

export const GenerationFoodStep = ({ setFieldValue, values }: IProps) => {
  const { incStepNumber } = useStepperNumber();
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(false);
  const { chooseNo1, chooseYes1, setChooseNo1, setChooseYes1 } = useChoise();
  const handleClick = () => {
    if (values.food === null) {
      return false;
    }
    return true;
  };
  useEffect(() => {
    setButtonVisibility(handleClick());
  }, [values.food]);
  return (
    <div className={container}>
      <div className={choiseContainer}>
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
      <div className={submitContainer}>
        <Button
          variant="outlined"
          onClick={incStepNumber}
          style={{
            borderRadius: "10px",
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.SECONDARY,
            width: "275px",
            height: "45px",
            fontSize: "16px",
            margin: "20px 0 0 0",
            opacity: buttonVisibility ? 1 : 0.6,
          }}
          disabled={!buttonVisibility}
        >
          Next step
        </Button>
      </div>
    </div>
  );
};
