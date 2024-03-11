import React from "react";
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
import dayjs, { Dayjs } from "dayjs";
import { GenerationDurationStep } from "../../components/GenerationDurationStep/GenerationDurationStep";

export interface IValues {
  country: string;
  state: string;
  city: string;
  date: dayjs.Dayjs;
  duration: number | null;
}

export const GenerationDesktop = () => {
  const { isNavbarOpen } = useNavbarActive();
  const initialValues: IValues = {
    country: "",
    state: "",
    city: "",
    date: dayjs("2022-04-17"),
    duration: null,
  };

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
          <Stepper stateNumber={0} />
          <div className={contentContainer}>
            <div className={questionBlock}>
              <div className={mainQuestion}>
                {/* {TEXT.GENERATION_PAGE_CREATE} */}
                {/* {TEXT.GENERATION_STEP_DAYS} */}
                {TEXT.GENERATION_STEP_DURATION}
              </div>
              <div className={description}>
                {/* {TEXT.GENERATION_PAGE_CREATE_DESCRIPTION} */}
                {/* {TEXT.GENERATION_STEP_DAYS_DESCRIPTION} */}
                {TEXT.GENERATION_STEP_DURATION_DESCRIPTION}
              </div>
              <form onSubmit={handleSubmit}>
                {/* <GenerateLocationStep
                  handleChange={handleChange}
                  values={values}
                /> */}
                <GenerationDaysStep
                  setFieldValue={setFieldValue}
                  values={values}
                />
                <GenerationDurationStep
                  handleChange={handleChange}
                  values={values}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
