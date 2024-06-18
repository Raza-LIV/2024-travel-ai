import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const btnDisable = css`
  background-color: ${COLORS.SECONDARY};
  color: ${COLORS.PRIMARY_OPAQUE[30]};
  border: ${COLORS.PRIMARY_OPAQUE[30]} solid 1px;
  transition-duration: 300ms;
  pointer-events: none;
`;
export const btnEnable = css`
  cursor: pointer;
  background-color: ${COLORS.PRIMARY};
  color: ${COLORS.SECONDARY};
  border: ${COLORS.SECONDARY} solid 1px;
  transition-duration: 300ms;
`;
export const caption = css`
  margin: 0 0 30px 0;
  font-size: 40px;
  font-weight: bold;
  width: 100%;
`;
export const linkText = css`
  font-size: 14px;
  white-space: normal;
  overflow-wrap: break-word;
  display: flex;
  justify-content: center;
`;
export const functionalContent = css`
  position: absolute;
  transition-delay: 500ms;
  transition-duration: 300ms;
  right: 0;
  width: 450px;
  display: flex;
  flex-direction: column;
  color: ${COLORS.PRIMARY};
  padding: 0 50px;
  font-size: 16px;
`;
export const linkPart = css`
  padding-left: 5px;
  display: inline;
  cursor: pointer;
  color: blue;
`;
export const questionText = css`
  padding: 10px 0 0 0;
  display: flex;
  justify-content: space-between;
`;
export const saveButton = css`
  margin: 20px 0 0 0;
  width: 100%;
  height: 50px;
  font-size: 18px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
