import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const generationPlaceStep = css`
  height: 100%;
  width: 100%;
  background-color: ${COLORS.PRIMARY};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const generationTab = css`
  height: 106px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.SECONDARY};
  font-size: 22px;
`;
export const backIcon = css`
  position: absolute;
  top: 33px;
  left: 33px;
`;
export const generationOptiocns = css`
  height: calc(100% - 106px);
  width: 100%;
  background-color: ${COLORS.SECONDARY};
  border-radius: 30px 30px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const stepper = css`
  height: 87px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const content = css`
  width: 100%;
  height: 100%;
`;
