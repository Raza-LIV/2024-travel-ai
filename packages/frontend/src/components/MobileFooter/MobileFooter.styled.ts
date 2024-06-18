import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const container = css`
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${COLORS.SECONDARY};
`;
export const editButtonLabel = css`
  font-size: 18px;
  color: ${COLORS.PRIMARY};
`;
export const editButton = css`
  outline: none;
  height: 50px;
  width: 90px;
  padding: 0 5px 0 10px;
  border-radius: 5px;
  display: flex;
  /* border: ${COLORS.PRIMARY} solid 1px; */
  justify-content: space-between;
  align-items: center;
`;
export const generateButtonLabel = css`
  font-size: 18px;
  color: ${COLORS.SECONDARY};
`;
export const generateButton = css`
  height: 50px;
  width: 146px;
  padding: 0 5px 0 10px;
  border-radius: 5px;
  border: ${COLORS.SECONDARY} solid 1px;
  background-color: ${COLORS.PRIMARY};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const iconContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
