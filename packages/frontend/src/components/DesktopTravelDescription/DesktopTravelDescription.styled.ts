import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const container = css`
  width: 280px;
  border-radius: 20px 20px 10px 10px;
  background-color: ${COLORS.SECONDARY};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  padding: 7px 10px;
  transition-duration: 300ms;
`;

export const dragZone = css`
  position: relative;
  top: 5;
  width: 100px;
  height: 5px;
  border-radius: 5px;
  background-color: ${COLORS.PRIMARY_OPAQUE[30]};
  margin: 0 0 5px 0;
`;

export const cityName = css`
  width: 100%;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.PRIMARY};
  font-size: 18px;
`;

export const descriptionContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  transition-duration: 300ms;
`;

export const description = css`
  width: 100%;
  height: 140px;
  font-size: 14px;
  color: ${COLORS.PRIMARY_OPAQUE[60]};
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  transition-duration: 300ms;
`;
