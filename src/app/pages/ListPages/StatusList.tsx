import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { DataGrid, IColumnProps } from "../../components/DataTable/DataTable";
import { GenButton } from "../../components/Form/Button/GenButton";
import { Modal } from "../../components/Modal/Modal";
import { StatusForm } from "../FormPages/StatusForm";
import { Icons } from "../../helpers/Icons";

export const StatusList: React.FC = () => {
    const { data, loading } = useFetch<any>("status");
    const [ showModal, setShowModal ] = useState<boolean>(true);
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
            <GridSystem container justify="end" height={40} alignItems gap={5} padding={15}>
                <GenButton label="Gravar" col={1} onClick={() => setShowModal(!showModal)} className="p-button-success"/>
                <GenButton label="Continuar" col={1} onClick={() => setShowModal(!showModal)} className="p-button-success"/>
                <GenButton label="Fechar" col={1} onClick={() => setShowModal(!showModal)} className="p-button-danger"/>
            </GridSystem>
        </>

    );

    return (
        <>
            <GridSystem container justify="center">
                <GridSystem container justify="start" height={40} gap={5}>
                    <GenButton label="Inserir"  col={1} onClick={() => setShowModal(!showModal)} className="p-button-success">
                        <Icons iconName={"FaCirclePlus"} />
                    </GenButton>
                </GridSystem>
                <DataGrid
                    columns={campos}
                    initialData={data}
                    col={12}
                    loading={loading}
                />
            </GridSystem>FaCirclePlus
            <Modal
				header={"header"}
				visible={showModal}
				footer={FOOTER}
				onHide={() => setShowModal(!showModal)}
			>
				<StatusForm />
			</Modal>
        </>
    );
};