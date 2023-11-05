import React, { useCallback, useEffect, useRef, useState } from "react";
import { InputText, InputTextProps } from 'primereact/inputtext';
import { useForm } from "../../../../context/formContext";
import { Cols, GridSystem } from "../../../GridLayout/Grid/Grid";
import { FormField, FormLabel, InputLabel, Inputcontainer, LeftSpan, RightSpan } from "./style";
interface InputProps extends InputTextProps {
    name?: string;
    id?: string;
    label?: string;
    placeholder?: string;
    initialData?: {};
    col?: Cols
};

export const InputDefault: React.FC<InputProps> = ({ 
    name,
    id,
    type,
    placeholder,
    label,
    initialData,
    col=2,
    ...props
}) => {
    // var dot = require('dot-object');
    const [ inputValue, setInputValue ] = useState<any>('');

    const { setFormValue } = useForm();

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setFormValue({
            name: inputRef.current?.name,
            value: inputValue
        });
    }, [inputValue, setFormValue]); 

    const handleOnChange = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            return setInputValue(e.currentTarget.value);
        }, 
        []
    );

    return (
        <GridSystem item cols={col} justify="center">
            <Inputcontainer>
                <FormLabel>
                    <LeftSpan>
                        <InputLabel htmlFor={name}>{label}</InputLabel>
                    </LeftSpan>
                    <RightSpan></RightSpan>
                </FormLabel>
                <FormField>
                    <InputText
                        ref={inputRef}
                        name={name}
                        id={name}
                        onChange={handleOnChange}
                        // placeholder={placeholder}
                        value={inputValue}
                        {...props}
                    />
                </FormField>
            </Inputcontainer>
        </GridSystem>
    );
};