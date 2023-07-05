import React, { useEffect, useState } from "react";
import { Form } from "../../components/Form/Form";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { InputDefault } from "../../components/Form/Inputs/InputDefault/InputDefault";
import { useForm } from "../../context/formContext";
import { GenButton } from "../../components/Form/Button/GenButton";
import { Modal } from "../../components/Modal/Modal";

interface IStatusForm {
    show: boolean,
    closeModal: (callBack: any) => void
}

export const StatusForm: React.FC<IStatusForm> = ({show, closeModal}) => {
    const { handleSubmit, formValues, clearFormValue } = useForm();
    const FOOTER = (
        <GridSystem container justify="end">
            <GenButton label="Gravar" col={4} onClick={handleSubmit} className="p-button-success"/>
            <GenButton label="Limpar" col={4} onClick={clearFormValue} className="p-button-success"/>
            <GenButton label="Fechar" col={4} onClick={closeModal} className="p-button-danger"/>
        </GridSystem>
    );

    console.log(formValues)

    return (
        <>
            <Modal
				header={"header"}
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
        </>
    );
};