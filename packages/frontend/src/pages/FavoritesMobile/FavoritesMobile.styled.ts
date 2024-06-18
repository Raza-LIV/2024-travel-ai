import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const favoriteContainer = css`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.PRIMARY};
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const favoriteLayout = css`
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
export const travels = css`
  width: 100%;
  height: 100%;
  border-radius: 30px 30px 0 0;
  background-color: ${COLORS.SECONDARY};
  padding: 10px;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
