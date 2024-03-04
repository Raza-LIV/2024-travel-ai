import { css } from "@emotion/css";

export const container = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
// export const navbar = css`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     height: 100%;
//     background-color: yellow;
//     transition: 0.3s;
// `
export const content = css`
    width: calc(100% - 70px);
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const centerBlock = css`
    height: 100%;
    width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`