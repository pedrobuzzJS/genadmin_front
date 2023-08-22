import React, { createContext, PropsWithChildren, useContext, useState } from "react";
interface inputField {
    name: any;
    ref?: any;
    value?: any;
}
interface IFormProps {
    id?: any;
    formValues: {};
    handleSubmit: (callBack?: Function) => void;
    clearFormValue: () => void;
    setFormValue: ({name, value}: inputField) => void;
};

interface FormWithChildren extends PropsWithChildren {};

const FormContext = createContext<IFormProps>({} as IFormProps);

export const FormProvider: React.FC<FormWithChildren> = ({children}) => {
    var dot = require('dot-object');
    const [ formValues, setFormValues ] = useState<object>([]);

    let form: object

    const setFormValue = ({name, value}: inputField) => {
        form = {
            ...form,
            [name]: value
        }
    };

    const handleSubmit = async (callBack?: Function) => {
        console.log(dot.object(form))
        if (callBack) callBack()
        return true
    };

    const clearFormValue = () => {
        setFormValues({})
    }

    return (
        <FormContext.Provider
            value={
                {
                    handleSubmit: handleSubmit,
                    formValues: formValues,
                    clearFormValue: clearFormValue,
                    setFormValue: setFormValue,
                }
            }
        >
            {children}
        </FormContext.Provider>
    );
};

export function useForm() {
    const context = useContext(FormContext);
    return context;
};