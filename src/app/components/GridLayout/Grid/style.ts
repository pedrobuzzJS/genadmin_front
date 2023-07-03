import styled, { css } from "styled-components";
import { IGridSystem } from "./Grid";

export const StyledGrid = styled.div<IGridSystem>`
    ${props => props?.container === true && css`
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: ${props?.direction};
        width: 100%;
        justify-content: ${props?.justify};
        padding-left: ${props.padding ?? 0}px;
        padding-right: ${props.padding ?? 0}px;
        gap: ${props.gap ?? 0}px;
    `}

    ${props => props?.container === true && props.alignItems && css`
        align-items: center;
    `}

    ${props => props.height && css`
        height: ${props.height}px;
    `}

    ${props => props?.item === true && css`
        display: block;
        flex-basis: calc( calc((${props.cols}/12)*100%));
        /* padding: calc(${props?.gap ?? 0}px/2); */
    `}
`;