import React, { useEffect, useState } from "react"
import { Chips, ChipsProps } from 'primereact/chips'
import { ChipContainer } from "./styles"
import { useForm } from "../../../../context/formContext";
import { Cols, GridSystem } from "../../../GridLayout/Grid/Grid";

interface IChipProps extends ChipsProps {
	name: string;
	col?: Cols
}

export const GenChips: React.FC<IChipProps> = ({ name, col, ...props}) => {
	const [ value, setValue ] = useState<any>('')
	const { setFormValue } = useForm();

	useEffect(() => {
        setFormValue({
            name: name,
            value: value
        });
    }, [name, setFormValue, value]); 

	return (
		<GridSystem item cols={col}>
			<ChipContainer>
				<Chips
					value={value}
					onChange={(e) => setValue(e.value)}
					name={name}
					style={
						{
							width: "100%",
						}
					}
					{...props}
				/>
			</ChipContainer>
		</GridSystem>
	)
}