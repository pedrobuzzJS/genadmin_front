import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { DataGrid, IColumnProps } from "../../components/DataTable/DataTable";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Form/Button/Button";

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

	const [ showModal, setShowModal ] = useState<boolean>(false);

    return (
        <>
          <GridSystem container justify="center">
            <DataGrid
                columns={campos}
                initialData={data}
                col={12}
            />
			<Button buttonDescription={"Abrir Modal"} onClick={() => setShowModal(true)}/>
			<Modal
				header={"header"}
				visible={showModal}
				footer={"footer"}
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