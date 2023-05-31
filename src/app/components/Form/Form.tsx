import React, { FormHTMLAttributes } from "react";
import { useForm } from "../../context/formContext";
import { FormInputs, InputType } from "../../utils/FormFields";
import { Direction, GridSystem, Justify } from "../GridLayout/Grid/Grid";
import { Button } from "./Button/Button";
import { InputDefault } from "./Inputs/InputDefault/InputDefault";
import { SelectInput } from "./Inputs/Select/Select";
import { FormContainer, StyledForm } from "./style";
import { DatePickerD } from "./Inputs/DatePicker/DatePicker";
import { createMetaProperty } from "typescript";
interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
    op?: number;
    initialData?: {};
    campos: FormInputs[];
    urlBack: string;
    callBack?: (callback?: any) => void;
    children?: React.ReactNode,
    justify?: Justify;
    direction?: Direction
};

export const Form: React.FC<IFormProps> = ({ op, initialData, justify="start", direction="row", campos, urlBack, callBack, children }) => {
    var dot = require('dot-object');

    const { handleSubmit } = useForm();

    return (
        <FormContainer>
            
            <StyledForm
                onSubmit={(e) => handleSubmit(e, urlBack, Number(op))}
            >
                <GridSystem
                    container
                    justify={justify}
                    direction={direction}
                >
                    {campos?.map( (campo, index) => (
                        campo.type === InputType.SELECT ?
                            <GridSystem
                                key={index}
                                item
                                cols={campo.cols}
                            >
                                <SelectInput
                                    key={index}
                                    id={campo.id}
                                    value={dot.pick(campo.name, initialData)}
                                    name={campo.name}
                                    listOptions={campo.options}
                                    label={campo.label}
                                    disabled={campo.disabled}
                                    placeholder={campo?.placeholder}
                                />
                            </GridSystem>
                            :
                            campo.type === InputType.DATE ?
                            <GridSystem
                                key={index}
                                item
                                cols={campo.cols}
                            >
                                <DatePickerD
                                    key={index}
                                    id={campo.id}
                                    initialData={dot.pick(campo.name, initialData)}
                                    name={campo.name}
                                    label={campo.label}
                                />
                            </GridSystem>
                            :
                            <GridSystem
                                key={index}
                                item
                                cols={campo.cols}
                            >
                                <InputDefault
                                    key={index}
                                    name={campo.name}
                                    id={campo.id}
                                    label={campo.label}
                                    placeholder={campo.placeholder}
                                    type={campo.type}
                                    disabled={campo.disabled}
                                    initialData={initialData}
                                />
                            </GridSystem>
                    ) )}
                </GridSystem>
                <Button
                    buttonDescription={"Enviar"}
                />
            </StyledForm>
        </FormContainer>
    );
};