import React, { useState } from "react";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { useFetch } from "../../hooks/useFetch";
import { DataGrid, IColumnProps } from "../../components/DataTable/DataTable";

export const MenuList: React.FC = () => {
    const { data: menus } = useFetch<any>("menu");
    const [ campos ] = useState<IColumnProps[]>([
        { isKey: true, field: "id", header: "ID", description: "id"},
        { field: "name", header: "Nome", description: "Nome", },
        { field: "parameters", header: "Parametros", description: "Parametros" },
        { field: "route", header: "Rotas", description: "Rotas" },
        { field: "icon", header: "Icone", description: "Icone" },
        { field: "parent_id", header: "Menu Pai", description: "Menu Pai" },
        { field: "status_id", header: "Status ID", description: "status_id" },
        { field: "created_at", header: "Criado em", description: "created_at" },
    ]);

    return (
        <>
          <GridSystem container justify="center">
            <DataGrid
                columns={campos}
                initialData={menus}
                col={12}
            />
          </GridSystem>
        </>
    );
};