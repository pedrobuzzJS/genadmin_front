import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { useFetch } from "../../hooks/useFetch";
import { FormInputs, InputType } from "../../utils/FormFields";

export const StatusForm: React.FC = () => {
    const [ inputs ] = useState<FormInputs[]>([
        {
            key: true,
            name: "id",
            id: "id",
            label: "Código",
            placeholder: "Código",
            type: InputType.NUMBER,
            cols: 2,
            disabled: true,
        },
        {
            name: "name",
            id: "name",
            label: "Nome",
            placeholder: "Nome",
            type: InputType.TEXT,
            cols: 2,
        },
        {
            name: "description",
            id: "description",
            label: "Descrição",
            placeholder: "Descrição",
            type: InputType.TEXT,
            cols: 2,
        },
        {
            name: "color",
            id: "color",
            label: "Cor",
            placeholder: "Cor",
            type: InputType.TEXT,
            cols: 2,
        },
    ]);
    const { op, id } = useParams();
    const { data } = useFetch<any>("status", {
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
                    <Form
                        campos={inputs}
                        urlBack="menu"
                        initialData={data}
                        op={Number(op)}
                        justify="start"
                    />
                </GridSystem>
            </GridSystem>
        </>
    );
};