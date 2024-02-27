import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const TravelContainer = css`
    height: 110px;
    width: 100%;
    margin: 0 0 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`
export const first = css`
    border-radius: 30px 30px 10px 10px;
`
export const other = css`
    border-radius: 10px;
`
export const add = css`
    border: dotted 1px ${COLORS.PRIMARY_OPAQUE[30]};
`
export const notAdd = css`
    border: solid 1px ${COLORS.PRIMARY_OPAQUE[30]};
`
export const flag = css`
    height: 110px;
    width: 35%;
    overflow: hidden;
`
export const content = css`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 4px 10px 7px 11px;
    justify-content: space-between;
`
export const labelTravel = css`
    width: 100%;
    height: 26px;
    margin: 0 0 3px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
`
export const labelColor = css`
    color: ${COLORS.PRIMARY};
`
export const textColor = css`
    color: ${COLORS.PRIMARY_OPAQUE[60]};
`
export const addColor = css`
    color: ${COLORS.PRIMARY_OPAQUE[30]};
`
export const generatedTravel = css`
    width: 100%;
    height: 70px;
    font-size: 10px;
`