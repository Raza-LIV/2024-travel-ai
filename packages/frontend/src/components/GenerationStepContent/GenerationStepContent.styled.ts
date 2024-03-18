import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const iconContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const iconLine = css`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const iconDescription = css`
  padding: 0 0 0 10px;
  font-size: 22px;
  color: ${COLORS.PRIMARY};
`;

export const mainQuestion = css`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.PRIMARY};
`;

export const description = css`
  width: 100%;
  padding: 0 0 0 10px;
  font-size: 12px;
  color: ${COLORS.PRIMARY_OPAQUE[60]};
`;
