import React, { useRef, useState, useEffect } from "react";
import { useForm } from "../../../../context/formContext";
// import type { DatePickerProps } from "antd";
import dayjs from "dayjs";
// import { DatePicker, DatePickerProps } from "antd";

interface IDatePicker {
  id: any;
  initialData: any;
  name: any;
  class?: string;
  label: any;
  disabled?: boolean;
}

export const DatePickerD: React.FC<IDatePicker> = ({id, name, label, initialData, disabled, ...props}) => {
  const [ inputValue, setInputValue ] = useState<any>();
  const [ error, setError ] = useState<string | null>(null);
  const inputRef = useRef<any>(null);
  const { setFormField } = useForm();

  useEffect( () => {
    if (initialData) {
      setInputValue(dayjs(initialData))
    }
  }, [initialData] );

useEffect(() => {
    setFormField({
        name: inputRef?.current,
        ref: inputRef?.current
    });
}, [setFormField]);


  // const handleOnChange: DatePickerProps['onChange'] = (date, dateString) => {
  //   console.log(inputRef?.current);
  //   setInputValue(date);
  // };

  return (
    <>
    {/* // <InputContainerWrapper> */}
        <label htmlFor={id}>
            <span>
                {label}
            </span>
        </label>
        {/* <DatePicker
            id={id}
            format="DD/MM/YYYY"
            ref={inputRef}
            onChange={handleOnChange}
            value={inputValue}
            style={{
                width: "95%"
            }}
        /> */}
    {/* // </InputContainerWrapper> */}
    </>
);
};