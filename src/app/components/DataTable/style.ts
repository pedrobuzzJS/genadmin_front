import styled from "styled-components";
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