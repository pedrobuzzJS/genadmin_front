import React, { useEffect, useRef, useState } from "react";
import { Checkbox, CheckboxProps } from 'primereact/checkbox';
import { Cols, GridSystem } from "../../../GridLayout/Grid/Grid";
import { useForm } from "../../../../context/formContext";
import { Inputcontainer } from "./styles";

interface ICheckBox extends CheckboxProps {
	name: string;
	col?: Cols;
};


export const GenCheckBox: React.FC<ICheckBox> = ({
	name,
	checked,
	col,
	...props
}) => {
	const [ inputValue, setInputValue ] = useState<boolean>(checked);

    const { setFormValue } = useForm();

    useEffect(() => {
        setFormValue({
            name: name,
            value: inputValue
        });
    }, [inputValue, name, setFormValue]);

	return (
    	<GridSystem item cols={col}>
			<Inputcontainer>
				<Checkbox
					name={name}
					onChange={(e: any) => setInputValue(e.checked)}
					checked={inputValue}
					style={{
						alignItems: 'center'
					}}
				/>
			</Inputcontainer>
    	</GridSystem>
	)
}