import styled, { css } from "styled-components";
import { ArrowDown } from "styled-icons/bootstrap";
import { LoaderAlt } from "styled-icons/boxicons-regular";
import { ColumnOrder } from "./DataTable";

interface TableRowProps {
    isOdd?: boolean
}

export const LoaderAltIcon = styled(LoaderAlt)`
    width: 200px;
    height: 200px;
    opacity: 25%;
    top: 50%;
    left: 50%;
    position: absolute;
    animation: rotate-animation .5s linear infinite;

    @keyframes rotate-animation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const Container = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
	padding: 1rem;
	/* box-shadow: 0 0 5px #333; */
	box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
	border: solid 1px #fff;
	background-color: #fff;
	border-radius: .4rem;
	position: relative;
`;

export const ButtonContainerGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding-bottom: 15px;
    justify-content: right;
`;

export const StyledTable = styled.table`
    width: 100%;
`;

export const Thead = styled.thead`
    text-align: left;
    width: 100%;
    position: sticky;
    top: 0;
`;

export const TheadTR = styled.tr`
    height: 40px;
`;

export const TheadTH = styled.th`
    /* display: flex; */
    /* justify-content: space-between; */
    /* flex-direction: row; */
    padding: 5px;
    position: relative;
    border: solid 1px #fff;
    background-color: rgb(238 238 238 / 50%);
    backdrop-filter: blur(5px);
    border-radius: 0.5rem;
`;

export const Tbody = styled.tbody``;

export const TbodyTR = styled.tr<TableRowProps>`
    background: ${props => props.isOdd? "#dddddd" : ""};
    /* height: 50px; */
`;

export const TbodyTRTH = styled.th``;

export const TbodyTRTD = styled.td`
    padding: .1rem;
    text-align: left;
`;

export const Paginacao = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
`;

export const FilterArea = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding-bottom: 15px;
    justify-content: right;
`;

interface ArrowFilter {
    order?: ColumnOrder;
}

export const OrderColumnIcon = styled(ArrowDown)<ArrowFilter>`
    position: absolute;
    height: 20px;
    width: 20px;
    right: 2px;
    display: inline-block;
    padding: 2px;

    ${props => props?.order === "asc" && css`
        transform: rotate(180deg);
    `}

    ${props => props?.order === "desc" && css`
    `}

    ${props => props?.order === "sort" && css`
        display: none;
    `}

    cursor: pointer;
`;