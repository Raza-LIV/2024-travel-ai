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
export const removeButton = css`
  cursor: pointer;
  height: 45px;
  width: 275px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.SECONDARY};
  border: red solid 1px;
  border-radius: 10px;
  transition-duration: 300ms;
  color: red;
  font-size: 16;
  &:hover {
    background-color: red;
    color: ${COLORS.SECONDARY};
    border: ${COLORS.PRIMARY_OPAQUE[30]} solid 1px;
  }
`;

export const description = css`
  width: 60%;
  padding: 0 0 10px 0;
  font-size: 12px;
  color: ${COLORS.PRIMARY_OPAQUE[60]};
`;
