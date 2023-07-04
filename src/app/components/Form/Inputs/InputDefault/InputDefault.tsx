import React, { useCallback, useEffect, useRef, useState } from "react";
import { InputText, InputTextProps } from 'primereact/inputtext';
import { useForm } from "../../../../context/formContext";
import { Cols, GridSystem } from "../../../GridLayout/Grid/Grid";
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
    var dot = require('dot-object');
    const [ inputValue, setInputValue ] = useState<any>('');

    const { setFormField } = useForm();

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setFormField({
            name: inputRef.current?.name,
            ref: inputRef.current
        });
    }, [setFormField]);

    const handleOnChange = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            return setInputValue(e.currentTarget.value);
        }, 
        []
    );

    return (
        <GridSystem item cols={col}>
            <InputText
                ref={inputRef}
                name={name}
                id={id}
                onChange={handleOnChange}
                placeholder={placeholder}
                value={inputValue}
                {...props}
                style={
                    {
                        width: "100%"
                    }
                }
            />
        </GridSystem>
    );
};