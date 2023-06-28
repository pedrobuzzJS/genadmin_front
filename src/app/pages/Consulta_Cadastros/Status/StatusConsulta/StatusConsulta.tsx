import React, { useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { GridSystem } from "../../../../components/GridLayout/Grid/Grid";
import { DataGrid } from "../../../../components/DataTable/DataTable";
import { GridFields } from "../../../../utils/Fields";
import { Icons } from "../../../../helpers/Icons";
import * as icons from "react-icons/fa6";





export const StatusList: React.FC = () => {
    const { data } = useFetch<any>("status");
    const [ campos ] = useState<GridFields[]>(
        [
            { field: "id", title: "ID", description: "id"},
            { field: "name", title: "Nome", description: "Nome"},
            { field: "description", title: "Descrição", description: "Descrição"},
            { field: "color", title: "Cor", description: "Cor"},
            { field: "buttons", title: "Acoes", description: "Acoes"}
        ]
    );

    return (
        <>
            <GridSystem container justify="center">
                <GridSystem item cols={12}>
                    <DataGrid
                        columns={campos}
                        initialData={data}
                    />
                </GridSystem>
            </GridSystem>
            <Icons
                iconName="FaPix"
                size={50}
                color="#2fb2a4"
            />
        </>
    );
};