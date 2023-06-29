import React from "react";
import { Container } from "./style";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { GridFields } from "../../utils/Fields";
import { Cols, GridSystem } from "../GridLayout/Grid/Grid";

interface GridProps {
    columns: GridFields[],
    initialData: any,
    loading?: boolean,
    pathMantencao?: string;
    col?: Cols
};

export type ColumnOrder = "asc" | "desc" | "sort";

export const DataGrid: React.FC<GridProps> = ({ columns, initialData, loading, pathMantencao, col,...props }) => {
    return (
        <GridSystem item cols={col}>
            <Container>
                <DataTable
                    value={initialData}
                    className="dataTable"
                    size="small"
                    scrollable
                    loading={false}
                >
                    {columns.map((col, i) => (
                        <Column key={col.field} field={col.field} header={col.title} />
                    ))}
                </DataTable>
            </Container>
        </GridSystem>
    )
};