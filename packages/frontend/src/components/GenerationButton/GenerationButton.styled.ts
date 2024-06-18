import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const backButton = css`
  width: 100%;
  padding: 10px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: ${COLORS.PRIMARY_OPAQUE[60]};
  text-decoration: underline;
  cursor: pointer;
`;
