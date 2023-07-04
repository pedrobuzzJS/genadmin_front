import React, { FormHTMLAttributes } from "react";
import { GridSystem } from "../GridLayout/Grid/Grid";
import { StyledForm } from "./style";
interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode
};

export const Form: React.FC<IFormProps> = ({ children, ...props }) => {
    if (children) {
        return (
            <StyledForm>
                <GridSystem container gap={5} >
                    {children}
                </GridSystem>
            </StyledForm>
        )
    } else {
        return (
            <StyledForm>
                {/* <GridSystem container > */}
                    <h1>No caso que for passado array de fields</h1>
                {/* </GridSystem> */}
            </StyledForm>
        )
    }
};