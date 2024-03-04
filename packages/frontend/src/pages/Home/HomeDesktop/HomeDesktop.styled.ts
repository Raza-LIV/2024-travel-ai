import { css } from "@emotion/css";
import { COLORS } from "../../../constants/colors";

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const greating = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 0 0;
  color: ${COLORS.PRIMARY};
  font-size: 22px;
`;
export const userName = css`
  font-weight: bold;
`;
export const menu = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 0 0;
`;
export const itemHolder = css`
  width: 48%;
  margin: 12px 0;
`;
