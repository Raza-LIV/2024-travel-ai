import { css } from "@emotion/css";
import { COLORS } from "../../constants/colors";

export const generationInput = css`
    width: 100%;
    height: 45px;
    border: solid ${COLORS.PRIMARY} 1px;
    border-radius: 10px;
    padding: 0 10px;
    font-size: 20px;
    color: ${COLORS.PRIMARY};
    outline: none;

    &::placeholder {
        color: ${COLORS.PRIMARY_OPAQUE[60]};
    }

    &:focus {
        border: solid ${COLORS.PRIMARY} 1px;
    }
`
export const generationInputError = css`
    position: relative;
    width: 100%;
    height: 45px;
    border: solid ${COLORS.ERROR} 1px;
    border-radius: 10px;
    padding: 0 10px;
    font-size: 20px;
    color: ${COLORS.PRIMARY};
    outline: none;

    &::placeholder {
        color: ${COLORS.PRIMARY_OPAQUE[60]};
    }

    &:focus {
        border: solid ${COLORS.ERROR} 2px;
    }
`
export const inputError = css`
    color: ${COLORS.ERROR};
    padding: 0 0 0 10px;
    margin: 0 0 10px 0;
    visibility: visible;
`
export const inputWithoutError = css`
    color: ${COLORS.ERROR};
    visibility: hidden;
`