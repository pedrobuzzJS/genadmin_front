import React, { useEffect, useState } from "react";
import { InputSwitch, InputSwitchChangeEvent, InputSwitchProps } from "primereact/inputswitch";
import { useForm } from "../../../../context/formContext";

interface IGenSwitch extends InputSwitchProps {
}


export const GenSwitch: React.FC<IGenSwitch> = ({name, ...props}) => {
  const [checked, setChecked] = useState(false);

  const { setFormValue } = useForm();

    useEffect(() => {
        setFormValue({
            name: name,
            value: checked
        });
    }, [checked, name, setFormValue]); 

    return (
        <div className="card flex justify-content-center">
            <InputSwitch
				name={name}
				checked={checked}
				onChange={(e: any) => setChecked(e.value)}
			/>
        </div>
    );
}