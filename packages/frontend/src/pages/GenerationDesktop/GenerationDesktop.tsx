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
import { GenerationStepContent } from "../../components/GenerationStepContent/GenerationStepContent";

interface IProps {
  handleSubmit: () => void;
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
