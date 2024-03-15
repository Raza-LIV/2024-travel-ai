import React, { ReactNode } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import {
  centerBlock,
  container,
  content,
  questionBlock,
  mainQuestion,
  description,
  contentContainer,
} from "./GenerationDesktop.styled";
import { css } from "@emotion/css";
import { useNavbarActive } from "../../store/isNavbarOpen";
import { Stepper } from "../../components/Stepper/Stepper";
import { TEXT } from "../../constants/text";
import { GenerateLocationStep } from "../../components/GenerateLocationStep/GenerateLocationStep";
import { GenerationDaysStep } from "../../components/GenerationDaysStep/GenerationDaysStep";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { GenerationDurationStep } from "../../components/GenerationDurationStep/GenerationDurationStep";
import { GenerationFoodStep } from "../../components/GenerationFoodStep/GenerationFoodStep";
import { GenerationArtStep } from "../../components/GenerationArtStep/GenerationArtStep";
import { useStepperNumber } from "../../store/stepNumber";

export interface IValues {
  country: string;
  state: string;
  city: string;
  date: dayjs.Dayjs;
  duration: number | null;
  food: boolean | null;
  art: boolean | null;
}

interface IContent {
  header: string;
  description: string;
  step: ReactNode;
}

interface IPasteContent {
  0: IContent;
  1: IContent;
  2: IContent;
  3: IContent;
  4: IContent;
}

export const GenerationDesktop = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const { isNavbarOpen } = useNavbarActive();
  const initialValues: IValues = {
    country: "",
    state: "",
    city: "",
    date: dayjs(formattedDate),
    duration: null,
    food: null,
    art: null,
  };

  const { stepNumber } = useStepperNumber();

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const pasteContent: IPasteContent = {
    0: {
      header: TEXT.GENERATION_PAGE_CREATE,
      description: TEXT.GENERATION_PAGE_CREATE_DESCRIPTION,
      step: (
        <GenerateLocationStep handleChange={handleChange} values={values} />
      ),
    },
    1: {
      header: TEXT.GENERATION_STEP_DAYS,
      description: TEXT.GENERATION_STEP_DAYS_DESCRIPTION,
      step: (
        <GenerationDaysStep
          setFieldValue={setFieldValue}
          values={values}
          currentDate={dayjs(formattedDate)}
        />
      ),
    },
    2: {
      header: TEXT.GENERATION_STEP_DURATION,
      description: TEXT.GENERATION_STEP_DURATION_DESCRIPTION,
      step: (
        <GenerationDurationStep handleChange={handleChange} values={values} />
      ),
    },
    3: {
      header: TEXT.GENERATION_STEP_FOOD,
      description: TEXT.GENERATION_STEP_FOOD_DESCRIPTION,
      step: (
        <GenerationFoodStep setFieldValue={setFieldValue} values={values} />
      ),
    },
    4: {
      header: TEXT.GENERATION_STEP_ART,
      description: TEXT.GENERATION_STEP_ART_DESCRIPTION,
      step: <GenerationArtStep setFieldValue={setFieldValue} values={values} />,
    },
  };

  return (
    <div className={container}>
      <Navbar />
      <div
        className={css(
          content,
          `padding-left: ${isNavbarOpen ? "290px" : "70px"}`
        )}
      >
        <div className={centerBlock}>
          <Stepper stateNumber={stepNumber} />
          <div className={contentContainer}>
            <div className={questionBlock}>
              <div className={mainQuestion}>
                {pasteContent[stepNumber as keyof IPasteContent].header}
              </div>
              <div className={description}>
                {pasteContent[stepNumber as keyof IPasteContent].description}
              </div>
              <form onSubmit={handleSubmit}>
                {pasteContent[stepNumber as keyof IPasteContent].step}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
