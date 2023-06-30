import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { GridFields } from "../../utils/Fields";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { DataGrid } from "../../components/DataTable/DataTable";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Form/Button/Button";

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
			>
				<h1>Ola poha</h1>
			</Modal>
          </GridSystem>
        </>
    );
};