import React, { useState } from "react";
import { DataGrid } from "../../components/DataTable/DataTable";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { useFetch } from "../../hooks/useFetch";
import { FieldTypes, GridFields } from "../../utils/Fields";
import { Operation } from "../../utils/Operation";

export const ExpenseTypeList: React.FC = () => {
    const { data } = useFetch("tipo-despesa");
    const [ campos ] = useState<GridFields[]>(
        [
            {
                key: true,
                field: "id",
                title: "ID",
                description: "id",
                type: FieldTypes.KEY,
            },
            {
                field: "name",
                title: "Nome",
                description: "Nome",
                type: FieldTypes.TEXT,
            },
            {
                field: "description",
                title: "Descrição",
                description: "Descrição",
                type: FieldTypes.TEXT,
            },
            {
                field: "buttons",
                title: "Acoes",
                description: "Acoes",
                type: FieldTypes.BUTTON,
                buttons: [
                    {
                        button: "tipo-despesa",
                        action: Operation.DROP,
                        title: "",
                        icon: "RiIcons.RiDashboardFill",
                        rotina: "tipo-despesa",
                        // dropDownButtons: [
                        //     {
                        //         button: "tipo-despesa",
                        //         action: Operation.VIEW,
                        //         title: "Visualizar",
                        //         icon: "RiDashboardFill",
                        //         rotina: "tipo-despesa",
                        //     },
                        //     {
                        //         button: "tipo-despesa",
                        //         action: Operation.ALTER,
                        //         title: "Alterar",
                        //         icon: "RiDashboardFill",
                        //         rotina: "tipo-despesa",
                        //     },
                        //     {
                        //         button: "tipo-despesa",
                        //         action: Operation.DELETE,
                        //         title: "Deletar    ",
                        //         icon: "RiDashboardFill",
                        //         rotina: "tipo-despesa",
                        //     },
                        // ]
                    }
                ]
            }
        ]
    );

    return (
        <>
            <GridSystem container justify="center">
              <DataGrid
                  columns={campos}
                  initialData={data}
                  col={8}
              />
            </GridSystem>
        </>
    );
};