import { boldText, italicText, styledText } from "./Placeholder.styled";
import { css } from "@emotion/css";

interface IProps {
  isVisible: boolean;
}

export const Placeholder = ({ isVisible }: IProps) => {
  return (
    <div className={css(styledText, `opacity: ${isVisible ? 1 : 0}`)}>
      <span>
        <span className={boldText}>Provide next generation options like: </span>
        <span className={italicText}>“Add museum to day plan” </span>
        <span className={boldText}>or </span>
        <span className={italicText}>“Make day plan longer” </span>e.g.
      </span>
    </div>
  );
};
