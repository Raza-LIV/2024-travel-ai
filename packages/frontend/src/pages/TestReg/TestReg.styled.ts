import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const container = css`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const centralBlock = css`
  position: relative;
  width: 900px;
  height: 600px;
  border: ${COLORS.PRIMARY} solid 1px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: ${COLORS.SECONDARY};
`;
