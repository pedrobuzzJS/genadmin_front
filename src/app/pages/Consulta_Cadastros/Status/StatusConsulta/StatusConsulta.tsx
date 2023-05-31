import React, { useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { FieldTypes, GridFields } from "../../../../utils/Fields";
import { Operation } from "../../../../utils/Operation";
import { GridSystem } from "../../../../components/GridLayout/Grid/Grid";
import { DataGrid } from "../../../../components/DataTable/DataTable";

export const StatusConsulta: React.FC = () => {
    const { data } = useFetch("status");
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
                field: "color",
                title: "Cor",
                description: "Cor",
                type: FieldTypes.TEXT,
            },
            {
                field: "buttons",
                title: "Acoes",
                description: "Acoes",
                type: FieldTypes.BUTTON,
                buttons: [
                    {
                        button: "status",
                        action: Operation.DROP,
                        title: "",
                        icon: "RiIcons.RiDashboardFill",
                        rotina: "status",
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
                <GridSystem item cols={12}>
                    <DataGrid 
                        columns={campos} 
                        initialData={data}
                        pathMantencao="status"
                    />
                </GridSystem>
            </GridSystem>
        </>
    );
};