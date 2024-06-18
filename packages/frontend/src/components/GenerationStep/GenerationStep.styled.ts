import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const headerContainer = css`
  width: 100%;
  transition-duration: 500ms;
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.PRIMARY};
`;

export const descriptionContainerDesktop = css`
  transition-duration: 500ms;
  width: 100%;
  padding: 0 10px;
  font-size: 12px;
  color: ${COLORS.PRIMARY_OPAQUE[60]};
`;

export const descriptionContainerMobile = css`
  transition-delay: 1300ms;
  transition-duration: 500ms;
  width: 100%;
  font-size: 12px;
  color: ${COLORS.PRIMARY_OPAQUE[60]};
`;

export const submitContainer = css`
  padding: 10px 0 0 0;
  transition-duration: 500ms;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const contentContainer = css`
  margin: 15px 0 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
