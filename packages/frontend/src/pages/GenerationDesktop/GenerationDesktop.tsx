import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import {
  centerBlock,
  container,
  content,
  questionBlock,
  contentContainer,
} from "./GenerationDesktop.styled";
import { css } from "@emotion/css";
import { useNavbarActive } from "../../store/isNavbarOpen";
import { Stepper } from "../../components/Stepper/Stepper";
import dayjs from "dayjs";
import { GenerationStepContent } from "../../components/GenerationStepContent/GenerationStepContent";

export interface IValues {
  country: string;
  state: string;
  city: string;
  date: dayjs.Dayjs;
  duration: number | null;
  food: boolean | null;
  art: boolean | null;
}

interface IProps {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  pasteContent: React.ReactNode[];
}

export const GenerationDesktop = ({ handleSubmit, pasteContent }: IProps) => {
  const { isNavbarOpen } = useNavbarActive();
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
          <Stepper />
          <div className={contentContainer}>
            <div className={questionBlock}>
              <form onSubmit={handleSubmit}>
                <GenerationStepContent content={pasteContent} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
