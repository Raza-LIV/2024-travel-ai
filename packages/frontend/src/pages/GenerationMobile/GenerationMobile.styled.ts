import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const generationPlaceStep = css`
    height: 100vh;
    width: 100vw;
    background-color: ${COLORS.PRIMARY};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
export const generationTab = css`
    height: 106px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLORS.SECONDARY};
    font-size: 22px;
`
export const backIcon = css`
    position: absolute;
    top: 33px;
    left: 33px;
`
export const generationOptiocns = css`
    height: calc(100% - 106px);
    width: 100%;
    background-color: ${COLORS.SECONDARY};
    border-radius: 30px 30px 0 0;
    padding: 0 10px 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
export const stepper = css`
    height: 87px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const content = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
`
export const generationLabel = css`
    color: ${COLORS.PRIMARY};
    font-weight: bold;
    font-size: 20px;
    padding: 0 10px;
    margin: 0 0 14px 0;
`
export const generationForm = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 12px;
    color: ${COLORS.PRIMARY_OPAQUE[60]};
`
export const generationPassive = css`
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    background-color: ${COLORS.PRIMARY_OPAQUE[30]};
    color: ${COLORS.SECONDARY};
    margin: 10px 0 0 0;
    pointer-events: none;
`
export const generationActive = css`
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    background-color: ${COLORS.PRIMARY};
    color: ${COLORS.SECONDARY};
    margin: 10px 0 0 0;
`