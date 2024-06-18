import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const homeContainer = css`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.PRIMARY};
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const dashboard = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.SECONDARY};
  font-size: 22px;
  width: 100vw;
  height: 106px;
`;
export const navigationMenu = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.SECONDARY};
  width: 100vw;
  height: calc(100vh - 106px);
  border-radius: 30px 30px 0 0;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;
export const loaderContainer = css`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const userName = css`
  color: ${COLORS.PRIMARY};
  width: 100vw;
  padding: 28px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  font-weight: bold;
  font-size: 22px;
`;
export const itemsHolder = css`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 10px;
  width: calc(100vw - 20px);
`;
