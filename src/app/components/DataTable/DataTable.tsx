import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldTypes, GridFields } from "../../utils/Fields";
import { Operation } from "../../utils/Operation";
import { Button } from "../Form/Button/Button";
import { ButtonContainer, ButtonContainerGrid, Container, DataTableStyle, LoaderAltIcon, OrderColumnIcon, StyledTable, Tbody, TbodyTR, TbodyTRTD, TbodyTRTH, Thead, TheadTH, TheadTR } from "./style";
import { Blocks } from  'react-loader-spinner'
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Editor } from "primereact/editor";

interface GridProps {
    columns: GridFields[],
    initialData: any,
    loading?: boolean,
    pathMantencao?: string;
};

interface OrderProps {
    name: string;
    order: ColumnOrder;
}

export type ColumnOrder = "asc" | "desc" | "sort";

export const DataGrid: React.FC<GridProps> = ({ columns, initialData, loading, pathMantencao, ...props }) => {
    const teste: any[] = initialData;
    const navigate = useNavigate();
    // const [ order, setOrder ] = useState<OrderProps[]>(
    //     [
    //         {
    //             name: "id",
    //             order: "sort",                
                
    //         },
    //         {
    //             name: "name",
    //             order: "sort",                
                
    //         },
    //         {
    //             name: "parameters",
    //             order: "sort"
    //         },
    //         {
    //             name: "route",
    //             order: "sort",                
                
    //         },
    //         {
    //             name: "icon",
    //             order: "sort",                
                
    //         },
    //         {
    //             name: "parent_id",
    //             order: "sort",                
                
    //         },
    //         {
    //             name: "status_id",
    //             order: "sort",                
    //         },
    //         {
    //             name: "created_at",
    //             order: "sort"
    //         },
    //         {
    //             name: "buttons",
    //             order: "sort"
    //         },
    //     ]
    // );

    const toggleSetOrder = useCallback(() => {
    }, []);

    const findValueById = useCallback((values: OrderProps[], key: any) => {
        const tt = values[values?.findIndex(item => item.name === key)]?.order;
        return tt;
    }, []);

    const buttonInserFormValues = useCallback( (op: number) => {
        let url = pathMantencao + `-manutencao/${op}`;
        return navigate("/"+url);
    }, [navigate, pathMantencao] );

    const buildMaintenanceURL = useCallback( (btn: string, op: number, id?: any) => {
        let url = btn + "-manutencao" + `/${op}` + `/${id}`;
        return navigate("/"+url);
    }, [navigate]);

    const handdleSelectButtonActions = useCallback( (btn: any, operation: number, id: number) => {
        switch(operation) {
            case Operation.ALTER:
                buildMaintenanceURL(btn, operation, id);
            break;
            case Operation.DELETE:
                buildMaintenanceURL(btn, operation, id);
            break;
            case Operation.VIEW:
                buildMaintenanceURL(btn, operation, id);
            break;
            default:
                console.log("botáo sem acao")
            break;
        }
    }, [buildMaintenanceURL]);
    // const [text1, setText1] = useState<any>('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');

    return (
        <Container>
            {/* <Editor style={{ height: '320px' }} value={text1} onTextChange={(e) => setText1(e.htmlValue)} /> */}
            <DataTableStyle>
                <DataTable
                    value={initialData}
                    stripedRows
                    className="dataTable"
                    size="small"
                    scrollable
                    // scrollHeight="700px"
                    // showGridlines
                    // style={
                    loading={false}
                        
                    // }
                >
                    {columns.map((col, i) => (
                        <Column key={col.field} field={col.field} header={col.title} />
                    ))}
                </DataTable>
            </DataTableStyle>
        </Container>
    )
};