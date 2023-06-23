import React, { useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { FieldTypes, GridFields } from "../../../../utils/Fields";
import { Operation } from "../../../../utils/Operation";
import { GridSystem } from "../../../../components/GridLayout/Grid/Grid";
import { DataGrid } from "../../../../components/DataTable/DataTable";
import { GlobalTable } from "../../Menus/MenuConsulta/test";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Blocks } from "react-loader-spinner";
import { Editor } from "primereact/editor";

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
                    {/* <i className="pi pi-spin pi-spinner" style={{'fontSize': '20px'}}></i> */}
                    {/* <Blocks
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                    /> */}    
                </GridSystem>
            </GridSystem>
        </>
    );
};