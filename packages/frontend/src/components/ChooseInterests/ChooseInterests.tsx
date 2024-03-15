import React from "react";
import {
  choiseContainer,
  choiseText,
  activeContainer,
  inactiveContainer,
  contentText,
  commonContainer,
  container,
} from "./ChooseInterests.styled";
import { IValues } from "../../pages/GenerationDesktop/GenerationDesktop";
import { FormikErrors } from "formik";
import { css } from "@emotion/css";

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
}: IProps) => {
  const containerclass: string[] = [
    commonContainer,
    inactiveContainer,
    activeContainer,
  ];
  return (
    <div
      className={css(container, containerclass[state])}
      onClick={() => {
        setFieldValue(character, valueField);
        setState(2);
        setOppositeState(1);
      }}
    >
      <div className={choiseContainer}>
        {icon}
        <div className={choiseText}>{answer}</div>
      </div>
      <div className={contentText}>{text}</div>
    </div>
  );
};
