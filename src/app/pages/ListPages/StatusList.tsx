import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { GridFields } from "../../utils/Fields";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { DataGrid } from "../../components/DataTable/DataTable";

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
            <DataGrid
                columns={campos}
                initialData={data}
                col={12}
            />
          </GridSystem>
        </>
    );
};