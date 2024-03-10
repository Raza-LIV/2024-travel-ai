import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const navbarContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  transition-duration: 300ms;
  background-color: ${COLORS.SECONDARY};
  pointer-events: all;
`;

export const componentContainer = css`
  width: 100%;
  transition-duration: 300ms;
  height: 100%;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  display: flex;
  pointer-events: none;
`;
