import React, { useState } from "react";
import { FormInputs, InputType } from "../utils/FormFields";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { GridSystem } from "../components/GridLayout/Grid/Grid";
import { Form } from "../components/Form/Form";

export const FormFieldsTests: React.FC = () => {
    const [ inputs ] = useState<FormInputs[]>([
        {
            key: true,
            name: "id",
            id: "id",
            label: "Código",
            placeholder: "Código",
            type: InputType.NUMBER,
            cols: 4,
            disabled: true,
        },
        {
            name: "name",
            id: "name",
            label: "Nome",
            placeholder: "Nome",
            type: InputType.TEXT,
            cols: 4
        },
        {
            name: "parameters",
            id: "parameters",
            label: "Parametros",
            placeholder: "Parametros",
            type: InputType.TEXT,
            cols: 4
        },
        {
            name: "status_id",
            id: "status_id",
            label: "Status",
            placeholder: "Status",
            type: InputType.SELECT,
            cols: 4,
            options: [
                {
                    value: "enable",
                    label: "Ativo"
                },
                {
                    value: "disable",
                    label: "Inativo"
                },
            ]
        },
    ]);
    // const { op, id } = useParams();
    // const { data } = useFetch<any>("menu", {
    //     params: {
    //         id: id
    //     }
    // });

    return (
        <>
            <GridSystem
                container
                justify="center"
            >
                <GridSystem
                    item
                    cols={8}
                >
                    <Form
                        campos={inputs}
                        urlBack="menu"
                        // initialData={data}
                        // op={Number(op)}
                        justify="start"
                    />
                </GridSystem>
            </GridSystem>
        </>
    );
};