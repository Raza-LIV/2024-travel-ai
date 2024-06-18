import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const container = css`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
export const content = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 500ms;
`;
export const centerBlock = css`
  height: 100%;
  width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const backgroundHolder = css`
  position: relative;
  width: 100%;
  height: 445px;
`;
export const backgroundImage = css`
  height: 445px;
  width: 100%;
  object-position: bottom;
  object-fit: cover;
  border-radius: 0 0 30px 30px;
`;
export const itemsHolder = css`
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const daysContainer = css`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  min-height: 1px;
  width: calc(100% - 48px);
  background-color: ${COLORS.BLACK_OPAQUE[60]};
  margin: 10px 0 15px 0;
`;
