import React, { FormHTMLAttributes } from "react";
import { useForm } from "../../context/formContext";
import { GridSystem } from "../GridLayout/Grid/Grid";
interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode
};

export const Form: React.FC<IFormProps> = ({ children, ...props }) => {
    var dot = require('dot-object');

    const { handleSubmit } = useForm();

    if (children) {
        return (
            <GridSystem container>
                {children}
            </GridSystem>
        )
    } else {
        return (
            <GridSystem container>
                <h1>No caso que for passado array de fields</h1>
            </GridSystem>
        )
    }
};