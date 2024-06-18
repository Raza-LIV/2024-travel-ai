import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const container = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.SECONDARY};
  border-radius: 30px 30px 0 0;
  padding: 10px;
  transition-duration: 500ms;
`;
export const disappearContainer = css`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition-duration: 400ms;
`;
export const travelLabelHolder = css`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
`;
export const labelContainer = css`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const travelSublabel = css`
  font-size: 30px;
  font-weight: bold;
  color: ${COLORS.PRIMARY};
`;
export const travelLabel = css`
  font-size: 14px;
  font-weight: bold;
  color: ${COLORS.PRIMARY_OPAQUE[60]};
`;
export const seperarot = css`
  height: 1px;
  width: calc(100% - 48px);
  background-color: ${COLORS.BLACK_OPAQUE[60]};
  margin: 10px 0;
`;
export const travelIconHolder = css`
  width: 100%;
  height: 100px;
  padding: 39px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const generationHolder = css`
  width: 100%;
  overflow-y: scroll;
  padding: 0 0 60px 0;
  transition-duration: 600ms;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
