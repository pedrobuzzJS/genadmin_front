import styled from "styled-components";
import { Close } from "@styled-icons/evil";

export const ModalBackGround = styled.div`
    background: rgb(0,0,0, 0.5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
`;

export const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 150px;
    background-color: #fff;
    border-radius: 6px;
    color: black;
    border: 2px solid black;
    position: fixed;
`;

export const ModalCloseButton = styled(Close)`
    position: absolute;
    /* background: transparent; */
    right: 5px;
    top: 2px;
    cursor: pointer;
    display: block;
    padding: 2px;
    width: 30px;
    height: 30px;
`;

export const ModalHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 35px;
    background: var(--input-placeholder);
`;

export const ModalFooter = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 35px;
    background: var(--input-placeholder);
`;
