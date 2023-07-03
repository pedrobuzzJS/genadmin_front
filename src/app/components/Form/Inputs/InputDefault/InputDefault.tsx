import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { InputText, InputTextProps } from 'primereact/inputtext';
import { useForm } from "../../../../context/formContext";
import { GenButton } from "../../Button/GenButton";
interface InputProps extends InputTextProps {
    name?: string;
    id?: string;
    label?: string;
    placeholder?: string;
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
    const [ inputValue, setInputValue ] = useState<any>('asd');

    const { setFormField } = useForm();

    const inputRef = useRef<HTMLInputElement>(null);

    const changeValue = () => {
        console.log('inputRef.name', inputRef.current?.name)
        console.log('inputRef.value', inputRef.current?.value)
        console.log('inputValue', inputValue)
    }

    useEffect( () => {
        // inputRef.current?.value = "porra"
        // setInputValue(dot.pick(name, initialData));
    }, [dot, initialData, name])

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
        <>
            <InputText
                ref={inputRef}
                name={name}
                id={id}
                onChange={handleOnChange}
                placeholder={placeholder}
                value={inputValue}
                {...props}
            />
            <GenButton label="Gravar" col={1} onClick={() => changeValue()} className="p-button-success"/>
        </>
    );
};