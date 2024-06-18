import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const settingsContainer = css`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.PRIMARY};
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const settingsLayout = css`
  width: 100vw;
  height: 106px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: ${COLORS.SECONDARY};
`;
export const backIcon = css`
  position: absolute;
  top: 33px;
  left: 33px;
`;
export const contentContainer = css`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.SECONDARY};
  border-radius: 30px 30px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const removeButton = css`
  margin: 20px 0 0 0;
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
  width: 80%;
  padding: 0 0 10px 0;
  font-size: 12px;
  color: ${COLORS.PRIMARY_OPAQUE[60]};
  margin: 15px;
`;
