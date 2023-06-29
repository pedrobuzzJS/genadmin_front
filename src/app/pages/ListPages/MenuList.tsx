import React, { useState } from "react";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { useFetch } from "../../hooks/useFetch";
import { FieldTypes, GridFields } from "../../utils/Fields";
import { DataGrid } from "../../components/DataTable/DataTable";

export const MenuList: React.FC = () => {
    const { data: menus } = useFetch<any>("menu");
    const [ campos ] = useState<GridFields[]>([
        { key: true, field: "id", title: "ID", description: "id", type: FieldTypes.KEY},
        { field: "name", title: "Nome", description: "Nome", type: FieldTypes.TEXT, },
        { field: "parameters", title: "Parametros", description: "Parametros", type: FieldTypes.TEXT },
        { field: "route", title: "Rotas", description: "Rotas", type: FieldTypes.TEXT },
        { field: "icon", title: "Icone", description: "Icone", type: FieldTypes.TEXT },
        { field: "parent_id", title: "Menu Pai", description: "Menu Pai", type: FieldTypes.TEXT },
        { field: "status_id", title: "Status ID", description: "status_id", type: FieldTypes.TEXT },
        { field: "created_at", title: "Criado em", description: "created_at", type: FieldTypes.TEXT },
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