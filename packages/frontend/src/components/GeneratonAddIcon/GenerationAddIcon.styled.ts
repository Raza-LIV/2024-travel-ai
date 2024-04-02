import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const iconContainer = css`
  transition-duration: 500ms;
`;

export const iconAndDetails = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const detailsContainer = css`
  padding: 0 0 0 10px;
  font-size: 22px;
  color: ${COLORS.PRIMARY};
`;
