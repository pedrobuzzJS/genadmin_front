import React, { useState } from "react";
import { DataGrid } from "../../../../components/DataTable/DataTable";
import { Filters } from "../../../../components/Filters/Filters";
import { GridSystem } from "../../../../components/GridLayout/Grid/Grid";
import { useFetch } from "../../../../hooks/useFetch";
import { LinkMenu } from "../../../../model/LinkMenu";
import { FieldTypes, GridFields } from "../../../../utils/Fields";
import { Operation } from "../../../../utils/Operation";

export const MenuConsulta: React.FC = () => {
    const { data: menus, loadding } = useFetch<LinkMenu[]>("menu");
    const [ campos ] = useState<GridFields[]>([
        { key: true, field: "id", title: "ID", description: "id", type: FieldTypes.KEY},
        { field: "name", title: "Nome", description: "Nome", type: FieldTypes.TEXT, },
        { field: "parameters", title: "Parametros", description: "Parametros", type: FieldTypes.TEXT },
        { field: "route", title: "Rotas", description: "Rotas", type: FieldTypes.TEXT },
        { field: "icon", title: "Icone", description: "Icone", type: FieldTypes.TEXT },
        { field: "parent_id", title: "Menu Pai", description: "Menu Pai", type: FieldTypes.TEXT },
        { field: "status_id", title: "Status ID", description: "status_id", type: FieldTypes.TEXT },
        { field: "created_at", title: "Criado em", description: "created_at", type: FieldTypes.TEXT },
        { field: "buttons", title: "Acoes", description: "Acoes", type: FieldTypes.BUTTON,
            buttons: [
                {
                    button: "menu",
                    action: Operation.DROP,
                    title: "",
                    icon: "RiIcons.RiDashboardFill",
                    rotina: "menu",
                }
            ]
        }
    ]);

    return (
        <>
            <Filters />
            <GridSystem
                container
                justify="center"
                direction="column"
            >
                <GridSystem
                    item
                    cols={12}
                >
                    <DataGrid
                        columns={campos} 
                        initialData={menus}
                        pathMantencao="menu"
                        loading={loadding}
                    />
                </GridSystem>
            </GridSystem>
        </>
    );
};