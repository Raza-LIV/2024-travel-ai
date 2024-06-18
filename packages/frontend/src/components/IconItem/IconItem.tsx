import { ReactNode } from "react";
import { container, editTag, text, iconContainer } from "./IconItem.styled";
import { css } from "@emotion/css";

interface IProps {
  icon: ReactNode;
  description: string;
  changed: boolean;
  index: number;
  onClick: () => void;
}

enum EMargin {
  ZERO = "0 5px 5px 0",
  ONE = "0 0 5px 5px",
  TWO = "5px 5px 0 0",
  THREE = "5px 0 0 5px",
}

export const IconItem = ({
  icon,
  description,
  changed,
  index,
  onClick,
}: IProps) => {
  const margins: string[] = [
    EMargin.ZERO,
    EMargin.ONE,
    EMargin.TWO,
    EMargin.THREE,
  ];
  return (
    <div
      className={css(container, `margin: ${margins[index]}`)}
      onClick={onClick}
    >
      <div className={css(editTag, `opacity: ${changed ? 1 : 0}`)}>*</div>
      <div className={iconContainer}>{icon}</div>
      <div className={text}>{description}</div>
    </div>
  );
};
