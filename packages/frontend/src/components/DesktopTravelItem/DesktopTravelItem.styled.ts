import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const container = css`
  height: 215px;
  width: 280px;
  position: relative;
  border: 1px solid ${COLORS.PRIMARY_OPAQUE[30]};
  overflow: hidden;
`;

export const lastContainer = css`
  height: 215px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px dotted ${COLORS.PRIMARY_OPAQUE[30]};
  overflow: hidden;
`;

export const flag = css`
  height: 160px;
  width: 280px;
  background-size: cover;
  background-position: center;
`;

export const addTravel = css`
  margin: 55px 0 20px 0;
`;

export const description = css`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const addNewTravelText = css`
  height: 26px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: ${COLORS.PRIMARY_OPAQUE[30]};
`;
