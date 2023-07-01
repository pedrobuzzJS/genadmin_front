import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { DataGrid, IColumnProps } from "../../components/DataTable/DataTable";
import { GenButton } from "../../components/Form/Button/GenButton";
import { Modal } from "../../components/Modal/Modal";

export const StatusList: React.FC = () => {
    const { data } = useFetch<any>("status");
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
        <div>
            <GenButton label="Fechar" onClick={() => setShowModal(!showModal)} className="p-button-danger"/>
        </div>
    );

	const [ showModal, setShowModal ] = useState<boolean>(false);

    return (
        <>
          <GridSystem container justify="center">
            <DataGrid
                columns={campos}
                initialData={data}
                col={12}
            />
			<GenButton label="Abrir" onClick={() => setShowModal(!showModal)}/>
			<Modal
				header={"header"}
				visible={showModal}
				footer={FOOTER}
				onHide={() => setShowModal(!showModal)}
                draggable={false}
                resizable={false}
			>
				<DataGrid
                    columns={campos}
                    initialData={data}
                    col={12}
                />
			</Modal>
          </GridSystem>
        </>
    );
};