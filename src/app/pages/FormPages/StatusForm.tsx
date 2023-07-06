import React from "react";
import { Form } from "../../components/Form/Form";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { InputDefault } from "../../components/Form/Inputs/InputDefault/InputDefault";
import { useForm } from "../../context/formContext";
import { GenButton } from "../../components/Form/Button/GenButton";
import { Modal } from "../../components/Modal/Modal";
import api from "../../services/api";

interface IStatusForm {
    show: boolean,
    closeModal: (callBack: any) => void
}

export const StatusForm: React.FC<IStatusForm> = ({show, closeModal}) => {
    const { handleSubmit, formValues, clearFormValue } = useForm();

    const handleSubmitForm = () => {
        // api.post()
        return console.log(formValues)
    }

    const FOOTER = (
        <GridSystem container justify="end" height={50} alignItems padding={50} gap={15}>
            <GenButton label="Gravar" col={1} onClick={() => handleSubmit(handleSubmitForm)} className="p-button-success"/>
            <GenButton label="Limpar" col={1} onClick={clearFormValue} className="p-button-success"/>
            <GenButton label="Fechar" col={1} onClick={closeModal} className="p-button-danger"/>
        </GridSystem>
    );

    const HEADER = (
        <GridSystem container justify="start" alignItems>
            <h1>Ola</h1>
        </GridSystem>
    )

    return (
        <Modal
			header={HEADER}
			visible={show}
			footer={FOOTER}
			onHide={() => closeModal(closeModal)}
		>
            <Form>
                <InputDefault
                    name={"user.name"}
                    id={"id"}
                    label={"labe"}
                    placeholder={"Input"}
                    col={4}
                />
                <InputDefault
                    name={"user.email"}
                    id={"id"}
                    label={"labe"}
                    placeholder={"Input"}
                    col={4}
                />
                <InputDefault
                    name={"age"}
                    id={"id"}
                    label={"labe"}
                    placeholder={"Input"}
                    col={4}
                />
            </Form>
		</Modal>
    );
};