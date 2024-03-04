import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const labelHolder = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0 10px 0 16px;
`;

export const iconContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
`;

export const iconWrapper = css`
  cursor: pointer;
`;

export const label = css`
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;
  font-weight: bold;
  font-size: 22px;
  color: ${COLORS.PRIMARY};
`;

export const description = css`
  padding: 0 10px 20px 16px;
  color: ${COLORS.PRIMARY};
`;

export const navOpenedContainer = css`
  min-width: 70px;
`;
