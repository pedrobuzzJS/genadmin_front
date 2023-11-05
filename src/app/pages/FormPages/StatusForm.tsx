import React from "react";
import { Form } from "../../components/Form/Form";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { InputDefault } from "../../components/Form/Inputs/InputDefault/InputDefault";
import { useForm } from "../../context/formContext";
import { GenButton } from "../../components/Form/Button/GenButton";
import { Modal } from "../../components/Modal/Modal";
import { Icons } from "../../helpers/Icons";

interface IStatusForm {
    show: boolean,
    closeModal: (callBack: any) => void
}

export const StatusForm: React.FC<IStatusForm> = ({show, closeModal}) => {
    const { handleSubmit, clearFormValue } = useForm();

    const handleSubmitForm = async () => {
    }

    const FOOTER = (
        <GridSystem container justify="end" height={50} alignItems padding={50} gap={15}>
            <GenButton label="Gravar" col={1} onClick={() => handleSubmit(handleSubmitForm)} className="p-button-success"/>
            <GenButton label="Limpar" col={1} onClick={clearFormValue} className="p-button-success"/>
            <GenButton label="Fechar" col={1} onClick={() => closeModal(clearFormValue)} className="p-button-danger"/>
        </GridSystem>
    );

    const HEADER = (
        <GridSystem container justify="space-between">
            <h3><Icons iconName="FaCircleDot"/> OlaS</h3>
            <h3>001</h3>
        </GridSystem>
    );

    return (
        <Modal
			header={HEADER}
			visible={show}
			footer={FOOTER}
			onHide={() => closeModal(clearFormValue)}
		>
            <Form>
                <InputDefault name={"id"} label={"Cod"} placeholder={"id"} col={3} disabled />
                <InputDefault name={"name"} label={"Nome"} placeholder={"name"} col={3} />
                <InputDefault name={"description"} label={"Descricao"} placeholder={"description"} col={3} />
                <InputDefault name={"color"} label={"Cor"} placeholder={"color"} col={3} />
                <InputDefault name={"color"} label={"Cor"} placeholder={"color"} col={3} />
                <InputDefault name={"color"} label={"Cor"} placeholder={"color"} col={3} />
            </Form>
		</Modal>
    );
};