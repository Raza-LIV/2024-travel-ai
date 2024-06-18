import { css } from "@emotion/css";
import { useEffect } from "react";
import { ChooseInterests } from "../ChooseInterests/ChooseInterests";
import { NoIcon } from "../../assets/icons/NoIcon";
import { ICON_SIZE } from "../../constants/iconSize";
import { TEXT } from "../../constants/text";
import { useGetWidth } from "../../hooks/get-width.hook";
import { CorrectIcon } from "../../assets/icons/CorrectIcon";
import { FormikErrors } from "formik";
import { useChoice } from "../../store/choice";
import { choiceContainer } from "./FoodStep.styled";
import { IValues } from "../../types/generation.types";
import { COLORS } from "../../constants/colors";

interface IProps {
  appearComponent: boolean;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IValues>>;
}

export const FoodStep = ({ appearComponent, setFieldValue }: IProps) => {
  const { windowSize } = useGetWidth();
  const { chooseNo1, chooseYes1, setChooseNo1, setChooseYes1 } = useChoice();
  useEffect(() => {
    setChooseNo1(0);
    setChooseYes1(0);
  }, []);
  return (
    <div
      className={css(
        choiceContainer,
        `
        opacity: ${appearComponent ? 1 : 0};
        transition-delay: ${windowSize <= 1190 ? 800 : 1800}ms;
        `
      )}
    >
      <ChooseInterests
        icon={<NoIcon size={ICON_SIZE[50]} color={COLORS.PRIMARY} />}
        answer={TEXT.CHOOSE_NO}
        text={TEXT.STEP_FOOD_CHOOSE_NO}
        setFieldValue={setFieldValue}
        valueField={false}
        character={"food"}
        state={chooseNo1}
        setState={setChooseNo1}
        setOppositeState={setChooseYes1}
        isBig={true}
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
        isBig={true}
      />
    </div>
  );
};
