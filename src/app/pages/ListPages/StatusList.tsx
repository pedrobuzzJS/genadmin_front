import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { DataGrid, IColumnProps } from "../../components/DataTable/DataTable";
import { GenButton } from "../../components/Form/Button/GenButton";
import { StatusForm } from "../FormPages/StatusForm";
import { Icons } from "../../helpers/Icons";

export const StatusList: React.FC = () => {
    const { data, loading } = useFetch<any>("status");
    const [ show, setShow ] = useState<boolean>(false)
    const [ campos ] = useState<IColumnProps[]>(
        [
            { isKey: true, field: "id", header: "ID", description: "id"},
            { field: "name", header: "Nome", description: "Nome"},
            { field: "description", header: "Descrição", description: "Descrição"},
            { field: "color", header: "Cor", description: "Cor"},
            { field: "buttons", header: "Acoes", description: "Acoes"}
        ]
    );

    const closeModal = () => {
        return setShow(false)
    }

    return (
        <>
            <GridSystem container justify="center">
                <GridSystem container justify="start" height={40} gap={5}>
                    <GenButton label="Inserir"  col={1} onClick={() => setShow(true)} className="p-button-success" children={<Icons iconName={"FaCirclePlus"} />} />
                </GridSystem>
                <GridSystem container justify="center">
                    <DataGrid
                        columns={campos}
                        initialData={data}
                        col={12}
                        loading={loading}
                    />
                </GridSystem>
            </GridSystem>
            <StatusForm show={show} closeModal={closeModal}/>
        </>
    );
};