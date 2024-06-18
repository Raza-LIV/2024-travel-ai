import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const container = css`
  position: relative;
  width: 348px;
  height: 120px;
`;
export const textareaContainer = css`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: ${COLORS.PRIMARY_OPAQUE[30]} solid 1px;
  border-radius: 10px;
  font-size: 12px;
  color: ${COLORS.PRIMARY_OPAQUE[60]};
  outline: none;
  resize: none;
`;
