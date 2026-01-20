import { css } from "@emotion/react";

export const cardStyle = (isActive) => css`
    position: relative;
    width: ${isActive ? "220px" : "120px"};
    height: ${isActive ? "330px" : "180px"};
    padding: 10px;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;

`;

export const imageStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const contentStyle = css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    color: white;
    background-color: rgba(0,0,0,0.6);
`;

export const mainDiv =css`
    display: flex;
    justify-content: center;
`;