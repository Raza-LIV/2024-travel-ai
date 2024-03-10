import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const container = css`
  width: 100%;
  height: 100%;
`;

export const content = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition-duration: 500ms;
`;

export const centerBlock = css`
  height: 100%;
  width: 900px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const pageName = css`
  height: 80px;
  display: flex;
  align-items: center;
  color: ${COLORS.PRIMARY};
  font-size: 34px;
  font-weight: bold;
`;

export const travelsList = css`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`;
