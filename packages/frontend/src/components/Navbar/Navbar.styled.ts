import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const navbarContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition-duration: 300ms;
  background-color: ${COLORS.SECONDARY};
  pointer-events: all;
`;

export const componentContainer = css`
  width: 100%;
  min-height: 100%;
  transition-duration: 300ms;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  display: flex;
  pointer-events: none;
`;
