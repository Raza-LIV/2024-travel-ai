import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 170px;
  height: 150px;
  padding: 12px 10px 12px 10px;
  border: 1px solid ${COLORS.PRIMARY};
  border-radius: 10px;

  cursor: pointer;
  background-color: ${COLORS.SECONDARY};
  transition-duration: 300ms;
`;
export const generationContainer = css`
  width: 189px;
  height: 209px;
  padding: 25px 12px 0 12px;
`;
export const modalContainer = css`
  width: 170px;
  height: 150px;
  padding: 12px 10px 12px 10px;
`;
export const commonContainer = css`
  filter: brightness(1);
  &:hover {
    transform: scale(1.05);
    filter: brightness(0.95);
  }
`;
export const activeContainer = css`
  transform: scale(1.05);
  filter: brightness(0.95);
  opacity: 1;
`;
export const inactiveContainer = css`
  opacity: 0.6;
  &:hover {
    filter: brightness(0.95);
    transform: scale(1.05);
    opacity: 1;
  }
`;

export const choiceContainer = css`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const generationChoiceContainer = css`
  height: 80px;
`;
export const modalChoiceContainer = css`
  height: 60px;
`;
export const choiseText = css`
  color: ${COLORS.PRIMARY};
  font-size: 16px;
  font-weight: bold;
`;
export const generationText = css`
  font-size: 20px;
`;
export const modalText = css`
  font-size: 16px;
`;
export const contentText = css`
  margin: 10px 0 0 0;
  font-size: 10px;
  color: ${COLORS.PRIMARY_OPAQUE[60]};
  text-align: center;
`;
