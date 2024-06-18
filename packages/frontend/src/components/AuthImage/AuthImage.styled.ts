import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const visualContent = css`
  position: absolute;
  z-index: 3;
  width: 450px;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition-duration: 500ms;
`;
export const backgroundImage = css`
  position: absolute;
  top: -50px;
  left: -50px;
  height: 700px;
  width: 550px;
  background-size: cover;
  background-repeat: no-repeat;
  transition-duration: 100ms;
`;
export const mantleContainer = css`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.PRIMARY_OPAQUE[60]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.SECONDARY};
  transition-duration: 500ms;
  &:hover {
    background-color: transparent;
  }
`;
export const headerText = css`
  padding: 20px 0 0 0;
  font-size: 40px;
  font-weight: bold;
`;
export const descriptionPart = css`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const descriptionText = css`
  padding: 0 20px 20px 20px;
  font-size: 14px;
`;
export const logInText = css`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  padding: 0 20px 20px 20px;
`;
export const buttonContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const rememberUser = css`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
`;
