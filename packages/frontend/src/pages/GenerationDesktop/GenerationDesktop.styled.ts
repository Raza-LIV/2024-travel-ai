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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 14px 0 0 0;
`;

export const contentContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const questionBlock = css`
  padding: 13px 0 10px 0;
  width: 100%;
  height: 243px;
  display: flex;
  flex-direction: column;
`;

export const mainQuestion = css`
  width: 100%;
  height: 29px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: ${COLORS.PRIMARY};
`;

export const description = css`
  width: 100%;
  height: 51px;
  padding: 0 0 0 10px;
  font-size: 12px;
  color: ${COLORS.PRIMARY_OPAQUE[60]};
`;
