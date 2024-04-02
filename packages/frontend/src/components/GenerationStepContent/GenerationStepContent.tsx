import React from "react";
import { additionalInformation } from "./GenerationStepContent.styled";
import { useGetWidth } from "../../hooks/get-width.hook";

interface IProps {
  content: React.ReactNode[];
}

export const GenerationStepContent = ({ content }: IProps) => {
  const { windowSize } = useGetWidth();
  return (
    <div>
      {windowSize > 1190 && <div className={additionalInformation}></div>}
      {content.map((item) => item)}
    </div>
  );
};
