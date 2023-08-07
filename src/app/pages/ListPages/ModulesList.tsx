import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { DataGrid, IColumnProps } from "../../components/DataTable/DataTable";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { GenButton } from "../../components/Form/Button/GenButton";
import { Icons } from "../../helpers/Icons";
import { ModulesForm } from "../FormPages/ModulesForm";

export const ModulesList: React.FC = () => {
	const { data, loading } = useFetch<any>("modules");
    const [ show, setShow ] = useState<boolean>(false)
    const [ campos ] = useState<IColumnProps[]>(
        [
            { isKey: true, field: "id", header: "ID", description: "id"},
            { field: "name", header: "Nome", description: "Nome"},
            { field: "created_at", header: "created_at", description: "created_at"},
            { field: "updated_at", header: "updated_at", description: "updated_at"},
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
                <DataGrid
                    columns={campos}
                    initialData={data}
                    col={12}
                    loading={loading}
                />
            </GridSystem>
            <ModulesForm show={show} closeModal={closeModal}/>
        </>
    );
};