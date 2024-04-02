import React, { ReactNode, useEffect, useState } from "react";
import { useGetWidth } from "../../hooks/get-width.hook";
import { GenerationMobile } from "../GenerationMobile/GenerationMobile";
import {
  GenerationDesktop,
  IValues,
} from "../GenerationDesktop/GenerationDesktop";
import dayjs from "dayjs";
import { useFormik } from "formik";
import { useStepperNumber } from "../../store/stepNumber";
import { GenerationStep } from "../../components/GenerationStep/GenerationStep";
import { TEXT } from "../../constants/text";

export const Generation = () => {
  const { windowSize } = useGetWidth();
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const initialValues: IValues = {
    country: "",
    state: "",
    city: "",
    date: dayjs(formattedDate),
    duration: null,
    food: null,
    art: null,
  };
  const { stepNumber, setStepNumber } = useStepperNumber();
  const [appear, setAppear] = useState<boolean>(false);
  const { values, handleChange, handleSubmit, setFieldValue, resetForm } =
    useFormik({
      initialValues,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  const pasteText = (index: number) => {
    if (index === 0)
      return `${values.country}${values.city && `, ${values.city}`}`;
    if (index === 1) {
      const date = new Date(`${values.date}`);
      const monthNames: string[] = [
        TEXT.JANUARY,
        TEXT.FEBRUARY,
        TEXT.MARCH,
        TEXT.APRIL,
        TEXT.MAY,
        TEXT.JUNE,
        TEXT.JULY,
        TEXT.AUGUST,
        TEXT.SEPTEMBER,
        TEXT.OCTOBER,
        TEXT.NOVEMBER,
        TEXT.DECEMBER,
      ];
      const monthName = monthNames[date.getMonth()];
      const day = date.getDate();
      return `${monthName} ${day}`;
    }
    if (index === 2) return `${values.duration} ${TEXT.DAYS}`;
    if (index === 3)
      return `${values.food ? TEXT.WITH : TEXT.WITHOUT} ${TEXT.RESTAURANTS}`;
  };
  const pasteContent: ReactNode[] = [
    <GenerationStep
      index={0}
      pasteText={pasteText}
      values={values}
      handleChange={handleChange}
      setFieldValue={setFieldValue}
    />,
    <GenerationStep
      index={1}
      pasteText={pasteText}
      values={values}
      handleChange={handleChange}
      setFieldValue={setFieldValue}
    />,
    <GenerationStep
      index={2}
      pasteText={pasteText}
      values={values}
      handleChange={handleChange}
      setFieldValue={setFieldValue}
    />,
    <GenerationStep
      index={3}
      pasteText={pasteText}
      values={values}
      handleChange={handleChange}
      setFieldValue={setFieldValue}
    />,
    <GenerationStep
      index={4}
      pasteText={pasteText}
      values={values}
      handleChange={handleChange}
      setFieldValue={setFieldValue}
    />,
  ];
  const chooseView = () => {
    if (windowSize <= 1190)
      return (
        <GenerationMobile
          appear={appear}
          values={values}
          handleSubmit={handleSubmit}
          pasteContent={pasteContent}
        />
      );
    return (
      <GenerationDesktop
        handleSubmit={handleSubmit}
        pasteContent={pasteContent}
      />
    );
  };
  useEffect(() => {
    setAppear(true);
  }, [stepNumber]);
  useEffect(() => {
    setStepNumber(0);
    resetForm();
  }, []);
  return chooseView();
};
