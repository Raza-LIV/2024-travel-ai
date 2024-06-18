import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const container = css`
  cursor: pointer;
  height: 80px;
  width: 169px;
  display: flex;
  border: ${COLORS.PRIMARY} solid 1px;
  border-radius: 5px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;
export const iconContainer = css`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const text = css`
  width: 100%;
  text-align: center;
  font-size: 9px;
  color: ${COLORS.PRIMARY};
  font-weight: bold;
  padding: 0 25px;
`;
export const editTag = css`
  position: absolute;
  top: 0px;
  right: 6px;
  transition-duration: 300ms;
  font-size: 25px;
  color: ${COLORS.PRIMARY_OPAQUE[30]};
`;
