import { useEffect } from "react";
import {
  choiceContainer,
  choiseText,
  activeContainer,
  inactiveContainer,
  contentText,
  commonContainer,
  container,
  generationContainer,
  modalContainer,
  generationChoiceContainer,
  modalChoiceContainer,
  generationText,
  modalText,
} from "./ChooseInterests.styled";
import { FormikErrors } from "formik";
import { css } from "@emotion/css";
import { IValues } from "../../types/generation.types";
import { useTravelModal } from "../../store/travelModal";
import { useSavedValues } from "../../store/savedInitialValues";

interface IProps {
  icon: JSX.Element;
  answer: string;
  text: string;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IValues>>;
  valueField: boolean;
  character: string;
  state: number;
  setState: (num: number) => void;
  setOppositeState: (num: number) => void;
  isBig: boolean;
}

interface ICharacter {
  [key: string]: boolean | null;
}

export const ChooseInterests = ({
  icon,
  answer,
  text,
  setFieldValue,
  valueField,
  character,
  state,
  setState,
  setOppositeState,
  isBig,
}: IProps) => {
  const { isModalVisible } = useTravelModal();
  const { savedFood, savedArt } = useSavedValues();
  const valueSetter: ICharacter = {
    food: savedFood,
    art: savedArt,
  };
  const containerclass: string[] = [
    commonContainer,
    inactiveContainer,
    activeContainer,
  ];

  useEffect(() => {
    setFieldValue(character, valueSetter[character]);
  }, [isModalVisible]);
  return (
    <div
      className={css(
        container,
        containerclass[state],
        isBig ? generationContainer : modalContainer
      )}
      onClick={() => {
        setFieldValue(character, valueField);
        setState(2);
        setOppositeState(1);
      }}
    >
      <div
        className={css(
          choiceContainer,
          isBig ? generationChoiceContainer : modalChoiceContainer
        )}
      >
        {icon}
        <div className={css(choiseText, isBig ? generationText : modalText)}>
          {answer}
        </div>
      </div>
      <div className={contentText}>{text}</div>
    </div>
  );
};
