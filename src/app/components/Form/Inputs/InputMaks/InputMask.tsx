import React, { useCallback, useEffect, useRef, useState } from "react";
import { InputMask, InputMaskProps } from "primereact/inputmask";
// import { InputMaskcontainer } from "./style";
import { useForm } from "../../../../context/formContext";
import { Cols, GridSystem } from "../../../GridLayout/Grid/Grid";
import { Inputcontainer } from "./style";

interface IInputMask extends InputMaskProps {
	name: string;
	col?: Cols;
	mask: string;
	placeholder: string;
}

export const GenMask: React.FC<IInputMask> = ({
	name,
	col,
	mask,
	placeholder,
	...props
}) => {
	const [ value, setValue ] = useState<any>('')
	const { setFormValue } = useForm();

	useEffect(() => {
        setFormValue({
            name: name,
            value: value
        });
    }, [name, setFormValue, value]); 

	return (
		<GridSystem
			item
			cols={col}
		>
			<Inputcontainer>
					<InputMask
						value={value}
						onChange={(e) => setValue(e.target.value)}
						mask={mask}
						placeholder={placeholder}
						{...props}
						style={{
							width: "100%"
						}}
					/>
			</Inputcontainer>
		</GridSystem>
  	)
}