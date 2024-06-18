import {
  contentContainer,
  editTag,
  itemContainer,
  itemDescription,
} from "./TravelIcon.styled";
import { css } from "@emotion/css";

interface IProps {
  icon: JSX.Element;
  description: string;
  handleClick: () => void;
  changed: boolean;
  size: number;
  fontSize: number;
}

export const TravelIcon = ({
  icon,
  description,
  handleClick,
  changed,
  size,
  fontSize,
}: IProps) => {
  return (
    <div
      className={css(itemContainer, `height: ${size}px; width: ${size}px`)}
      onClick={handleClick}
    >
      <div className={css(editTag, `opacity: ${changed ? 1 : 0}`)}>*</div>
      <div className={contentContainer}>
        <div>{icon}</div>
        <div className={css(itemDescription, `font-size: ${fontSize}px;`)}>
          {description}
        </div>
      </div>
    </div>
  );
};
