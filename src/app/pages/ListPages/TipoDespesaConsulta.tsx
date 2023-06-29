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
            { key: true,field: "id",title: "ID",description: "id",type: FieldTypes.KEY },
            { field: "name",title: "Nome",description: "Nome",type: FieldTypes.TEXT },
            { field: "description",title: "Descrição",description: "Descrição",type: FieldTypes.TEXT },
            { field: "buttons",title: "Acoes",description: "Acoes",type: FieldTypes.TEXT },
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