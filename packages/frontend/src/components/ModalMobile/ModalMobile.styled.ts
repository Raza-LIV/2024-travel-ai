import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const modalBlur = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 300ms;
`;
export const container = css`
  position: relative;
  width: 368px;
  background-color: ${COLORS.SECONDARY};
  border-radius: 10px;
  transition-duration: 300ms;
`;
