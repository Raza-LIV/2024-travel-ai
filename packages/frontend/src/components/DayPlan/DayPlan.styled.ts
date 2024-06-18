import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const container = css`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: ${COLORS.PRIMARY_OPAQUE[30]} solid 1px;
  padding: 5px 20px 14px 20px;
  margin: 0 0 10px 0;
  transition-duration: 300ms;
`;
export const topContainer = css`
  width: 100%;
  height: 30px;
  margin: 0 0 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const styledTitle = css`
  font-size: 18px;
  font-weight: bold;
  color: ${COLORS.PRIMARY};
`;
export const generatedText = css`
  font-size: 10px;
  color: ${COLORS.PRIMARY};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const buttonsContainer = css`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: flex-end;
`;
export const editTag = css`
  width: 110px;
  height: 30px;
  padding: 0 5px 0 10px;
  border: ${COLORS.PRIMARY_OPAQUE[30]} solid 1px;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-duration: 300ms;
`;
export const regenerateButton = css`
  cursor: pointer;
`;
export const editTagLabel = css`
  font-size: 14px;
  color: ${COLORS.PRIMARY_OPAQUE[30]};
`;
