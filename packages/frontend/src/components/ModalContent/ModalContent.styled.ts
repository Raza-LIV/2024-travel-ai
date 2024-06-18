import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const contentContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 10px;
`;
export const modalTopBar = css`
  padding: 10px 0 0 0;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const modalBoby = css`
  transition-delay: 300ms;
  transition-duration: 300ms;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const label = css`
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: ${COLORS.PRIMARY};
`;
export const modalButtomBar = css`
  width: 348px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const cancelButton = css`
  cursor: pointer;
  width: 100px;
  height: 50px;
  border: ${COLORS.PRIMARY} solid 1px;
  border-radius: 5px;
  font-size: 18px;
  color: ${COLORS.PRIMARY};
  background-color: ${COLORS.SECONDARY};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const saveButton = css`
  width: 238px;
  height: 50px;
  font-size: 18px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const btnEnable = css`
  cursor: pointer;
  background-color: ${COLORS.PRIMARY};
  color: ${COLORS.SECONDARY};
  border: ${COLORS.SECONDARY} solid 1px;
  transition-duration: 300ms;
`;
export const btnDisable = css`
  background-color: ${COLORS.SECONDARY};
  color: ${COLORS.PRIMARY_OPAQUE[30]};
  border: ${COLORS.PRIMARY_OPAQUE[30]} solid 1px;
  transition-duration: 300ms;
`;
export const formContainer = css`
  width: 100%;
`;
export const settingsDescription = css`
  padding: 10px 5px 0 5px;
  width: 100%;
  font-size: 12px;
  color: ${COLORS.PRIMARY_OPAQUE[60]};
`;
