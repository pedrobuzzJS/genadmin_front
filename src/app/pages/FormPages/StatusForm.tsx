import React from "react";
import { Form } from "../../components/Form/Form";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { InputDefault } from "../../components/Form/Inputs/InputDefault/InputDefault";
import { useForm } from "../../context/formContext";
import { GenButton } from "../../components/Form/Button/GenButton";
import api from "../../services/api";
import { Modal } from "../../components/Modal/Modal";
import { GenChips } from "../../components/Form/Inputs/Chips/Chps";
import { GenMask } from "../../components/Form/Inputs/InputMaks/InputMask";
import { GenCheckBox } from "../../components/Form/Inputs/CheckBox/CheckBox";
import { GenSwitch } from "../../components/Form/Inputs/Switch/GenSwitch";
import { GenPassword } from "../../components/Form/Inputs/Password/Password";
import { GenColor } from "../../components/Form/Inputs/Color/ColorPicker";
interface IStatusForm {
    show: boolean,
    closeModal: (callBack: any) => void
}

export const StatusForm: React.FC<IStatusForm> = ({show, closeModal}) => {
    const { handleSubmit, formValues, clearFormValue } = useForm();

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
        <GridSystem container justify="start" alignItems>
            <h3>Ola</h3>
        </GridSystem>
    )

    return (
        <Modal
			header={HEADER}
			visible={show}
			footer={FOOTER}
			onHide={() => closeModal(clearFormValue)}
		>
            <Form>
                <InputDefault
                    name={"id"}
                    label={"Cod"}
                    placeholder={"id"}
                    col={3}
                    disabled
                />
                <InputDefault
                    name={"person.name"}
                    label={"Nome"}
                    placeholder={"name"}
                    col={3}
                />
                <InputDefault
                    name={"person.description"}
                    label={"Descricao"}
                    placeholder={"description"}
                    col={3}
                />
                <InputDefault
                    name={"color"}
                    label={"Cor"}
                    placeholder={"color"}
                    col={3}
                />
                <GenChips
                    name="test.chip"
                    col={3}
                    placeholder="Chip"
                />
                <GenMask
                    name="test.genmaks"
                    mask="999.999.999.99"
                    placeholder="CPF"
                    col={3}
                />
                <GenPassword
                    name="password"
                    col={3}
                />
                {/* <GenCheckBox
                    name="check"
                    checked={false}
                />
                <GenSwitch
                    name="switch"
                    checked={false}
                />
                <GenColor
                    name="color"
                    col={3}
                /> */}
            </Form>
		</Modal>
    );
};