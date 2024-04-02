import { css } from "@emotion/css";
import React from "react";
import { ChooseInterests } from "../ChooseInterests/ChooseInterests";
import { CorrectIcon } from "../../assets/icons/CorrectIcon";
import { ICON_SIZE } from "../../constants/iconSize";
import { TEXT } from "../../constants/text";
import { NoIcon } from "../../assets/icons/NoIcon";
import { useGetWidth } from "../../hooks/get-width.hook";
import { useChoise } from "../../store/choise";
import { FormikErrors } from "formik";
import { IValues } from "../../pages/GenerationDesktop/GenerationDesktop";
import { choiseContainer } from "./ArtStep.styled";

interface IProps {
  appearComponent: boolean;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IValues>>;
}

export const ArtStep = ({ appearComponent, setFieldValue }: IProps) => {
  const { windowSize } = useGetWidth();
  const { chooseNo2, chooseYes2, setChooseNo2, setChooseYes2 } = useChoise();
  return (
    <div
      className={css(
        choiseContainer,
        `
            opacity: ${appearComponent ? 1 : 0};
            transition-delay: ${windowSize <= 1190 ? 800 : 1800}ms;
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
  );
};
