import styled, { css } from "styled-components";
import { FaPix } from "react-icons/fa6";
import { ColumnOrder } from "./DataTable";

interface TableRowProps {
    isOdd?: boolean
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const TbodyTR = styled.tr<TableRowProps>`
    background: ${props => props.isOdd? "#dddddd" : ""};
`;

// export const LoaderAltIcon = styled(FaPix)`
//     width: 200px;
//     height: 200px;
//     opacity: 25%;
//     top: 50%;
//     left: 50%;
//     position: absolute;
//     animation: rotate-animation .5s linear infinite;

//     @keyframes rotate-animation {
//         0% {
//             transform: rotate(0deg);
//         }
//         100% {
//             transform: rotate(360deg);
//         }
//     }
// `;