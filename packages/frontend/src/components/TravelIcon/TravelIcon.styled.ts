import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const itemContainer = css`
  position: relative;
  border-radius: 5px;
  border: ${COLORS.PRIMARY} solid 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-color: ${COLORS.SECONDARY};
  cursor: pointer;
  transition-duration: 300ms;
  &:hover {
    filter: brightness(0.875);
  }
`;
export const editTag = css`
  position: absolute;
  top: 0px;
  right: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-duration: 300ms;
  font-size: 25px;
  color: ${COLORS.PRIMARY_OPAQUE[30]};
`;
export const contentContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const itemDescription = css`
  /* font-size: 9px; */
  font-weight: bold;
  color: ${COLORS.PRIMARY};
`;
