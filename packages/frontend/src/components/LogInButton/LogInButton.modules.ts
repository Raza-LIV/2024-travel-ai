import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const container = css`
  width: 60px;
  height: 60px;
  background-color: ${COLORS.SECONDARY};
  border: ${COLORS.PRIMARY} solid 1px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 300ms;
  cursor: pointer;
  box-shadow: 5px 5px 10px ${COLORS.BLACK_OPAQUE[50]};
  &:hover {
    transform: scale(1.1);
  }
`;
