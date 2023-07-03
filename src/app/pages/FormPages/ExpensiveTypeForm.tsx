import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { useFetch } from "../../hooks/useFetch";
import { FormInputs, InputType } from "../../utils/FormFields";

export const ExpenseTypeForm: React.FC = () => {
    const [ inputs ] = useState<FormInputs[]>([
        {
            key: true,
            name: "id",
            id: "id",
            label: "Código",
            placeholder: "Código",
            cols: 4,
            disabled: true,
        },
        {
            name: "name",
            id: "name",
            label: "Nome",
            placeholder: "Nome",
            cols: 4,
        },
        {
            name: "description",
            id: "description",
            label: "Descrição",
            placeholder: "Descrição",
            cols: 4,
        },
    ]);
    const { op, id } = useParams();
    const { data } = useFetch<any>("tipo-despesa", {
        params: {
            id: id
        }
    });

    return (
        <>
            <GridSystem
                container
                justify="center"
            >
                <GridSystem
                    item
                    cols={12}
                >
                    
                </GridSystem>
            </GridSystem>
        </>
    );
};