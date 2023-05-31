import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { InputContainerWrapper, StyledError } from "./style";
import Masks from "../Masks/Masks";
import { useForm } from "../../../../context/formContext";
import { Input, InputRef } from "antd";

export type FormInputTypes = "text" | "email" | "password" | "button" | "color" | "file" | "cpf"
                        | "currency" | "cep" | "date" | "number";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    id?: string;
    label?: string;
    placeholder?: string;
    type?: FormInputTypes;
    initialData?: {};
    disabled?: boolean;
};

export const InputDefault: React.FC<InputProps> = ({ 
    name,
    id,
    type,
    placeholder,
    label,
    initialData,
    disabled,
    ...props
}) => {
    var dot = require('dot-object');
    const [ isFocused, setIsFocused ] = useState<Boolean>(false);
    const [ inputErro, setInputErro ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);
    const inputRef = useRef<InputRef>(null);
    const [ inputValue, setInputValue ] = useState<any>();

    const { setFormField } = useForm();

    useEffect( () => {
        setInputValue(dot.pick(name, initialData));
    }, [dot, initialData, name])

    useEffect(() => {
        setFormField({
            name: inputRef?.current?.input?.name,
            ref: inputRef?.current?.input
        });
    }, [setFormField]);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    const handleInputError = useCallback(() => {

    }, []);

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
            {/* <InputContainerWrapper
                error={Boolean(error)}
                focus={isFocused}
            > */}
                <label htmlFor={id}>
                    <span>
                        {label}
                        <span>
                            {/* * */}
                        </span>
                    </span>
                    <span>
                        {/* Erro */}
                    </span>
                </label>
                <Input
                    placeholder={placeholder}
                    ref={inputRef}
                    name={name}
                    id={id}
                    onChange={handleOnChange}
                    // onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    value={inputValue}
                    disabled={disabled}
                    style={{width: '95%'}}
                />
                { error && 
                    <StyledError>
                        {error}
                    </StyledError>
                }
            {/* </InputContainerWrapper> */}
        </>
    );
};