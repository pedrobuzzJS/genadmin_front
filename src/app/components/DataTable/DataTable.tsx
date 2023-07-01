import React from "react";
import { Container } from "./style";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnProps } from "primereact/column";
import { Cols, GridSystem } from "../GridLayout/Grid/Grid";

export interface IGridProps {
    columns: IColumnProps[],
    initialData: any,
    col?: Cols
};

export interface IColumnProps extends ColumnProps {
    isKey?: boolean;
    description?: string;
}

export type ColumnOrder = "asc" | "desc" | "sort";

export const DataGrid: React.FC<IGridProps> = ({ columns, initialData, col,...props }) => {
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
                        <Column key={i} field={col.field} header={col.header} />
                    ))}
                </DataTable>
            </Container>
        </GridSystem>
    )
};