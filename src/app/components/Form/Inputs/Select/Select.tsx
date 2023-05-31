import React, { SelectHTMLAttributes, useEffect, useRef, useState } from "react";
import { useForm } from "../../../../context/formContext";
import { SelectList } from "../../../../utils/SelectList";
// import Select from "react-select";
import { Select, RefSelectProps } from "antd";
import { useFetch } from "../../../../hooks/useFetch";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    id: any;
    value: string;
    name: any;
    listOptions: SelectList[];
    pixels?: string;
    selected?: boolean;
    color?: string;
    class?: string;
    disable?: boolean;
    subList?: any[];
    label: any;
    disabled?: boolean;
};

export const SelectInput: React.FC<SelectProps> = ({ id, name, value, listOptions, label, pixels, ...props }) => {
    const [ selectdOptions, setSelectdOptions ] = useState();
    const inputSelectRef = useRef<RefSelectProps>(null);
    const { data: status } = useFetch<any[]>("status");
    // const statusOptions: any = status?.map(item => { return { value: item?.id, label: item?.name } });

    const { sendValues, inputArrayValues, setFormField } = useForm();
    console.log(listOptions)

    // useEffect(() => {
    //     setFormField({
    //         name: inputSelectRef.current.name,
    //         ref: inputSelectRef.current
    //     });
    // }, [setFormField]);

    return (
        <>
            <label htmlFor={id}>
                <span>
                    {label}
                </span>
            </label>
            <Select
                id={id}
                ref={inputSelectRef}
                options={listOptions}
                value={value}
                style={{
                    width: "95%"
                }}
            />
        </>
    );
};