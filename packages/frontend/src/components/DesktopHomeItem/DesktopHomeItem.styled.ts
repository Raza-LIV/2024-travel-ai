import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const desktopHomeItemContainerPrimary = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 440px;
  height: 185px;
  border-radius: 20px;
  border: solid 1px ${COLORS.SECONDARY};
  background-color: ${COLORS.PRIMARY};
  cursor: pointer;
  transition-duration: 300ms;
  &:hover {
    filter: brightness(0.9);
  }
`;
export const desktopHomeItemContainerSecondary = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 440px;
  height: 185px;
  border-radius: 20px;
  border: solid 1px ${COLORS.PRIMARY};
  background-color: ${COLORS.SECONDARY};
  cursor: pointer;
  transition-duration: 300ms;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const cardTop = css`
  margin: 10px 10px 5px 10px;
  height: 40px;
  width: calc(100% - 20px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const cardTopLabelPrimary = css`
  color: ${COLORS.SECONDARY};
  font-size: 24px;
  font-weight: bold;
`;
export const cardTopLabelSecondary = css`
  color: ${COLORS.PRIMARY};
  font-size: 24px;
  font-weight: bold;
`;
export const hello = css`
  margin: 5px 10px 10px 10px;
  height: 120px;
  width: calc(100% - 20px);
  overflow: hidden;
  font-size: 12px;
`;
export const cardDescriptionPrimary = css`
  margin: 5px 10px 10px 10px;
  height: 120px;
  width: calc(100% - 20px);
  overflow: hidden;
  font-size: 12px;
  color: ${COLORS.SECONDARY};
`;
export const cardDescriptionSecondary = css`
  margin: 5px 10px 10px 10px;
  height: 120px;
  width: calc(100% - 20px);
  overflow: hidden;
  font-size: 12px;
  color: ${COLORS.PRIMARY};
`;
