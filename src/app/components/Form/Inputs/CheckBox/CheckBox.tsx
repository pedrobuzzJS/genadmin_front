import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { InputContainerWrapper, StyledError } from "./style";
import { useForm } from "../../../../context/formContext";
import { FormInputTypes } from "../InputDefault/InputDefault";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    id?: string;
    label?: string;
    placeholder?: string;
    type?: FormInputTypes;
    initialData?: {};
};

export const CheckBox: React.FC<InputProps> = ({
    name,
    id,
    type,
    placeholder,
    label,
    initialData,
    ...props
}) => {
    var dot = require('dot-object');
    const [ isFocused, setIsFocused ] = useState<Boolean>(false);
    // const [ isFilled, setIsFilled ] = useState<Boolean>(false);
    const [ inputErro, setInputErro ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);
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

    return (
        <>
            <InputContainerWrapper
                error={Boolean(error)}
                focus={isFocused}
            >
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
                <input
                    ref={inputRef}
                    type="checkbox"
                    name={name}
                    id={id}
                    // onChange={handleOnChange}
                    placeholder={placeholder}
                    // onFocus={handleInputFocus}
                    // onBlur={handleInputBlur}
                    value={inputValue}
                    {...props}
                />
                { error && 
                    <StyledError>
                        {error}
                    </StyledError>
                }
            </InputContainerWrapper>
        </>
    );
};