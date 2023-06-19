import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { InputContainerWrapper, InputDiv, StyledError } from "./style";
import Masks from "../Masks/Masks";
import { InputText } from 'primereact/inputtext';
import { useForm } from "../../../../context/formContext";
import { Chips } from 'primereact/chips';
import { InputMask } from 'primereact/inputmask';
import { Editor } from 'primereact/editor';

export type FormInputTypes = "text" | "email" | "password" | "button" | "color" | "file" | "cpf"
                        | "currency" | "cep" | "date" | "number";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    id?: string;
    label?: string;
    placeholder?: string;
    type?: FormInputTypes;
    initialData?: {};
};

export const InputDefault: React.FC<InputProps> = ({ 
    name,
    id,
    type,
    placeholder,
    label,
    initialData,
    ...props
}) => {
    var dot = require('dot-object');
    const [ error ] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [ inputValue, setInputValue ] = useState<any>();

    const { setFormField } = useForm();

    useEffect( () => {
        setInputValue(dot.pick(name, initialData));
    }, [dot, initialData, name])

    useEffect(() => {
        setFormField({
            name: inputRef.current?.name,
            ref: inputRef.current
        });
    }, [setFormField]);

    const handleOnChange = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            const mask = new Masks();
            switch (type) {
                case "cep":
                    mask.cep(e);
                    return setInputValue(e.currentTarget.value);
                break;
                case "currency":
                break;
                case "cpf":
                    mask.cpf(e);
                    return setInputValue(e.currentTarget.value);
                break;
                case "email":
                break;
                case "text":
                    return setInputValue(e.currentTarget.value);
                break;
                default:
                break;
            };
        }, 
        [type]
    );

    return (
        <>
            <InputContainerWrapper
                error={Boolean(error)}
            >
                <label htmlFor={id}>
                    <span>
                        {label}
                    </span>
                </label>
                <InputDiv>
                    <InputText
                        ref={inputRef}
                        type={type}
                        name={name}
                        id={id}
                        onChange={handleOnChange}
                        placeholder={placeholder}
                        value={inputValue}
                        {...props}
                    />
                </InputDiv>
                { error && 
                    <StyledError>
                        {error}
                    </StyledError>
                }
            </InputContainerWrapper>
        </>
    );
};