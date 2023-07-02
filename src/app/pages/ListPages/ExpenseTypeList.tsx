import React, { useState } from "react";
import { DataGrid, IColumnProps } from "../../components/DataTable/DataTable";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { useFetch } from "../../hooks/useFetch";

export const ExpenseTypeList: React.FC = () => {
    const { data, loading } = useFetch("tipo-despesa");
    const [ campos ] = useState<IColumnProps[]>(
        [
            { isKey: true, field: "id", header: "ID",description: "id" },
            { field: "name", header: "Nome",description: "Nome"  },
            { field: "description", header: "Descrição",description: "Descrição"  },
            { field: "buttons", header: "Acoes",description: "Acoes"  },
        ]
    );

    return (
        <>
            <GridSystem container justify="center">
              <DataGrid
                  columns={campos}
                  initialData={data}
                  col={12}
                  loading={loading}
              />
            </GridSystem>
        </>
    );
};