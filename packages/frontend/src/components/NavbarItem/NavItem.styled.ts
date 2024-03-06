import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const labelHolder = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0 10px 0 0;
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 16px;
  height: 100%;
  flex-grow: 1;
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
  cursor: pointer;
  transition-duration: 300ms;
  background-color: ${COLORS.SECONDARY};
  &:hover {
    filter: brightness(0.9);
  }
`;
