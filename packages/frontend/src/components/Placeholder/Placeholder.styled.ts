import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const styledText = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 12px;
  color: ${COLORS.PRIMARY_OPAQUE[60]};
  pointer-events: none;
  display: flex;
  transition-duration: 300ms;
`;
export const boldText = css`
  font-weight: bold;
`;
export const italicText = css`
  font-style: italic;
`;
