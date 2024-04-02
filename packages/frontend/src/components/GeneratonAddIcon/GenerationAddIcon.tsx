import { css } from "@emotion/css";
import React from "react";
import { detailsContainer, iconAndDetails } from "./GenerationAddIcon.styled";

interface IProps {
  appearIcon: boolean;
  icon: JSX.Element;
  text: string | undefined;
}

export const GenerationAddIcon = ({ appearIcon, icon, text }: IProps) => {
  return (
    <div
      className={css(
        iconAndDetails,
        `
            opacity: ${appearIcon ? 1 : 0};
            transition-delay: ${appearIcon && "300ms"};
            transition-duration: ${appearIcon ? 500 : 0}ms
            `
      )}
    >
      <div>{icon}</div>
      <div className={detailsContainer}>{text}</div>
    </div>
  );
};
