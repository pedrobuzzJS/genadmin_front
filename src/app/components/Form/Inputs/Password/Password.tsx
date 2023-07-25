import React, { useEffect, useState } from "react";
import { Password, PasswordProps } from 'primereact/password';
import { useForm } from "../../../../context/formContext";
import { Cols, GridSystem } from "../../../GridLayout/Grid/Grid";
import { InputContainet } from "./styles";

interface IGenPassword extends PasswordProps {
	name: string;
	col?: Cols;
}

export const GenPassword: React.FC<IGenPassword> = ({
	name,
	col,
	...props
}) => {
	const [value, setValue] = useState<string>('');
	const { setFormValue } = useForm();

	useEffect(() => {
        setFormValue({
            name: name,
            value: value
        });
    }, [name, setFormValue, value]); 

	return (
		<GridSystem item cols={col}>
			<InputContainet>
				<Password
					name={name}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					toggleMask
					{...props}
					style={
						{
							width: "100%",
						}
					}
				/>
			</InputContainet>
		</GridSystem>
	)
}