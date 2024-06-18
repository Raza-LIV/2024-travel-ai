import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const container = css`
  position: relative;
  display: flex;
  align-items: center;
  height: 20px;
`;
export const check = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  top: 0;
  left: 0;
  pointer-events: none;
`;
export const checkLabel = css`
  font-size: 16px;
  cursor: pointer;
  padding: 0 0 0 5px;
  transition-duration: 300ms;
  &:active {
    transform: scale(1.05);
  }
`;
export const checkLabelActive = css`
  transform: scale(1.05);
`;
export const checkField = css`
  appearance: none;
  height: 20px;
  width: 20px;
  border: ${COLORS.PRIMARY} solid 1px;
  border-radius: 5px;
  cursor: pointer;
  transition-duration: 300ms;
`;
