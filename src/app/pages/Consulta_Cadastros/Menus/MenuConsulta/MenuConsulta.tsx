import React, { useState } from "react";
import { DataGrid } from "../../../../components/DataTable/DataTable";
import { Filters } from "../../../../components/Filters/Filters";
import { GridSystem } from "../../../../components/GridLayout/Grid/Grid";
import { useFetch } from "../../../../hooks/useFetch";
import { LinkMenu } from "../../../../model/LinkMenu";
import { FieldTypes, GridFields } from "../../../../utils/Fields";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "../../../../components/Form/Button/Button";
import { MenuForm } from "../MenuCadastro/MenuCadastro";
import { Modal } from "../../../../components/Modal/Modal";
import { GlobalTable } from "./test";

export const MenuList: React.FC = () => {
    const { data: menus, loadding } = useFetch<any>("menu");
    const [ showModal, setShowModal ] = useState<boolean>(false);
    const [ campos ] = useState<GridFields[]>([
        { key: true, field: "id", title: "ID", description: "id", type: FieldTypes.KEY},
        { field: "name", title: "Nome", description: "Nome", type: FieldTypes.TEXT, },
        { field: "parameters", title: "Parametros", description: "Parametros", type: FieldTypes.TEXT },
        { field: "route", title: "Rotas", description: "Rotas", type: FieldTypes.TEXT },
        { field: "icon", title: "Icone", description: "Icone", type: FieldTypes.TEXT },
        { field: "parent_id", title: "Menu Pai", description: "Menu Pai", type: FieldTypes.TEXT },
        { field: "status_id", title: "Status ID", description: "status_id", type: FieldTypes.TEXT },
        { field: "created_at", title: "Criado em", description: "created_at", type: FieldTypes.TEXT },
        // { field: "buttons", title: "Acoes", description: "Acoes", type: FieldTypes.BUTTON,
        //     buttons: [
        //         {
        //             button: "menu",
        //             action: Operation.DROP,
        //             title: "",
        //             icon: "RiIcons.RiDashboardFill",
        //             rotina: "menu",
        //         }
        //     ]
        // }
    ]);

    const openModalForm = () => {
        setShowModal(true);
    };

    return (
        <>
            {/* <Filters /> */}
            <GridSystem
                container
                justify="center"
                direction="column"
            >
                <GridSystem
                    item
                    cols={12}
                >
                    {/* <DataGrid
                        columns={campos} 
                        initialData={menus}
                        pathMantencao="menu"
                        loading={loadding}
                    /> */}
                    <GlobalTable>
                        <DataTable value={menus} stripedRows className="dataTable">
                            {campos.map((col, i) => (
                                <Column key={col.field} field={col.field} header={col.title} />
                            ))}
                        </DataTable>
                    </GlobalTable>
                </GridSystem>
                {/* <Button
                    buttonDescription={"Teste de ModalForm"}
                    onClick={openModalForm}
                /> */}
            </GridSystem>
            {/* <Modal id={'sim'} openModal={showModal} closeModal={() => setShowModal(false)}> */}
                {/* <MenuForm /> */}
            {/* </Modal> */}
        </>
    );
};