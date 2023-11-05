import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { useFetch } from "../../hooks/useFetch";
import { FormInputs, InputType } from "../../utils/FormFields";

export const MenuForm: React.FC = () => {
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
            cols: 4
        },
        {
            name: "parameters",
            id: "parameters",
            label: "Parametros",
            placeholder: "Parametros",
            cols: 4
        },
        {
            name: "route",
            id: "route",
            label: "Rotas",
            placeholder: "Rotas",
            cols: 4
        },
        {
            name: "icon",
            id: "icon",
            label: "Icone",
            placeholder: "Icone",
            cols: 4
        },
        {
            name: "parent_id",
            id: "parent_id",
            label: "Link Pai",
            placeholder: "Link Pai",
            cols: 4
        },
        {
            name: "component",
            id: "component",
            label: "Componente",
            placeholder: "Componente",
            cols: 4
        },
        {
            name: "has_childrens",
            id: "has_childrens",
            label: "Possui Filhos",
            placeholder: "Possui Filhos",
            cols: 4
        },
        {
            name: "order",
            id: "order",
            label: "Ordem",
            placeholder: "Ordem",
            cols: 4
        },
        {
            name: "disabled",
            id: "disabled",
            label: "Desabilitado",
            placeholder: "Desabilitado",
            cols: 4
        },
        {
            name: "status_id",
            id: "status_id",
            label: "Status",
            placeholder: "Status",
            cols: 4,
            options: [
                {
                    value: 1,
                    label: "Ativo"
                },
                {
                    value: 2,
                    label: "Inativo"
                },
            ]
        },
        {
            name: "created_at",
            id: "created_at",
            label: "Criado em",
            placeholder: "Criado em",
            cols: 4
        },
        {
            name: "updated_at",
            id: "updated_at",
            label: "Alterado em",
            placeholder: "Alterado em",
            cols: 4
        },
    ]);
    const { op, id } = useParams();
    // const { data } = useFetch<any>("menu", {
    //     param: {
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
                    cols={12}
                >
                   
                </GridSystem>
            </GridSystem>
        </>
    );
};