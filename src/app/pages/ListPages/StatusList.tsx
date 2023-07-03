import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { DataGrid, IColumnProps } from "../../components/DataTable/DataTable";
import { GenButton } from "../../components/Form/Button/GenButton";
import { Modal } from "../../components/Modal/Modal";

export const StatusList: React.FC = () => {
    const { data, loading } = useFetch<any>("status");
    const [ campos ] = useState<IColumnProps[]>(
        [
            { isKey: true, field: "id", header: "ID", description: "id"},
            { field: "name", header: "Nome", description: "Nome"},
            { field: "description", header: "Descrição", description: "Descrição"},
            { field: "color", header: "Cor", description: "Cor"},
            { field: "buttons", header: "Acoes", description: "Acoes"}
        ]
    );

    const FOOTER = (
        <>
            <GridSystem container justify="end" height={40} alignItems padding={25}>
                <GenButton label="Gravar" col={1} onClick={() => setShowModal(!showModal)} className="p-button-success"/>
                <GenButton label="Continuar" col={1} onClick={() => setShowModal(!showModal)} className="p-button-success"/>
                <GenButton label="Fechar" col={1} onClick={() => setShowModal(!showModal)} className="p-button-danger"/>
            </GridSystem>
        </>

    );

	const [ showModal, setShowModal ] = useState<boolean>(true);

    return (
        <>
            <GridSystem container justify="center">
                <DataGrid
                    columns={campos}
                    initialData={data}
                    col={12}
                    loading={loading}
                />
                <GridSystem container justify="center">
                    <GenButton label="Abrir" col={12} padding={5} onClick={() => setShowModal(!showModal)}/>
                    <GenButton label="Abrir" col={1} padding={5} onClick={() => setShowModal(!showModal)}/>
                    <GenButton label="Abrir" col={1} padding={5} onClick={() => setShowModal(!showModal)}/>
                </GridSystem>
            </GridSystem>
            <Modal
				header={"header"}
				visible={showModal}
				footer={FOOTER}
				onHide={() => setShowModal(!showModal)}
			>
				<DataGrid
                    columns={campos}
                    initialData={data}
                    col={12}
                />
			</Modal>
        </>
    );
};