import React, { useEffect, useState } from "react";
import { ChooseInterests } from "../ChooseInterests/ChooseInterests";
import { NoIcon } from "../../assets/icons/NoIcon";
import { TEXT } from "../../constants/text";
import { CorrectIcon } from "../../assets/icons/CorrectIcon";
import { Button } from "@mui/material";
import { COLORS } from "../../constants/colors";
import {
  choiseContainer,
  container,
  submitContainer,
} from "./GenerationArtStep.styled";
import { ICON_SIZE } from "../../constants/iconSize";
import { FormikErrors } from "formik";
import { IValues } from "../../pages/GenerationDesktop/GenerationDesktop";
import { useChoise } from "../../store/choise";

interface IProps {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IValues>>;
  values: IValues;
}

export const GenerationArtStep = ({ setFieldValue, values }: IProps) => {
  const { chooseNo2, chooseYes2, setChooseNo2, setChooseYes2 } = useChoise();
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

  return (
    <div className={container}>
      <div className={choiseContainer}>
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
      <div className={submitContainer}>
        <Button
          variant="outlined"
          onClick={handleClick}
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
          type="submit"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
