import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const navbarContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  transition-duration: 300ms;
  background-color: ${COLORS.SECONDARY};
`;

export const componentContainer = css`
  width: 100%;
  transition-duration: 300ms;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
`;
