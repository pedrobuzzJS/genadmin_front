import React, { useEffect, useState } from "react";
import { ColorPicker, ColorPickerProps } from 'primereact/colorpicker';
import { Cols } from "../../../GridLayout/Grid/Grid";
import { useForm } from "../../../../context/formContext";

interface IGenColor extends ColorPickerProps {
	col?: Cols;
}

export const GenColor: React.FC<IGenColor> = ({
	name,
	...props
}) => {
	const [color, setColor] = useState<string>('f0d453');

	const { setFormValue } = useForm();

    useEffect(() => {
        setFormValue({
            name: name,
            value: color
        });
    }, [color, name, setFormValue]);

	const handleColor = (value: any) => {
		setColor(value.target.value)
	}

    return (
        <>
			<ColorPicker
				name={name}
				value={color}
				onChange={(e: any) => setColor(e.value)}
				{...props}
			/>
			<input type="text" value={color} onChange={(e: any) => handleColor(e)}/>
		</>        
    )
}