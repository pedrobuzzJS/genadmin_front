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
	const [color, setColor] = useState<string>('');

	const { setFormValue } = useForm();

    useEffect(() => {
        setFormValue({
            name: name,
            value: color
        });
    }, [color, name, setFormValue]);

    return (
        <>
			<ColorPicker
				name={name}
				value={color}
				onChange={(e: any) => setColor(e.value)}
				{...props}
			/>
		</>        
    )
}