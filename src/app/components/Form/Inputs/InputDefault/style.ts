import styled from "styled-components";

interface InputProps {
    focus?: boolean | any;
    error: boolean;
};

export const InputContainerWrapper = styled.div<InputProps>`
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    border: ${({ focus }) => (focus ? '2px solid #0a6ed1' : '2px solid var(--input-border)')};

    > label {
        display: flex;
        justify-content: space-between;

        > span {
            color: black;
            font-size: 12px;
        }
    }

    > input {
        /* width: 95%; */
    }
`;

export const InputLabel = styled.label``;

export const StyledError = styled.h1`
`;