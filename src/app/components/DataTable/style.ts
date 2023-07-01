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