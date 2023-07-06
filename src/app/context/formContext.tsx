import React, { createContext, PropsWithChildren, useContext, useState } from "react";
interface inputField {
    name: any;
    ref: any;
}
interface IFormProps {
    id?: any;
    formValues: {};
    handleSubmit: (callBack?: Function) => void;
    clearFormValue: () => void;
    sendingValues: boolean;
    setFormField: ({name, ref}: inputField) => void;
    getInitialValue: (name: string) => any;
};

interface FormWithChildren extends PropsWithChildren {};

const FormContext = createContext<IFormProps>({} as IFormProps);

export const FormProvider: React.FC<FormWithChildren> = ({children}) => {
    var dot = require('dot-object');
    const [ sendingValues ] = useState<boolean>(false);
    const [ formValues, setFormValues ] = useState<object>([]);
    const fieldRefArray: inputField[] = [];
    const setFormFieldArray = ({name, ref}: inputField) => {
        fieldRefArray.push({name, ref});
    };

    const handleSubmit = async (callBack?: Function) => {
        const formObj = await fieldRefArray.reduce((obj: any, item: any) => ((obj[item?.name] = item?.ref?.value), obj),{})
        const newObjectValues = dot.object(formObj)
        setFormValues(newObjectValues)
        if (callBack) callBack()
        return true
    };

    const clearFormValue = () => setFormValues({})

    const getInitialValue = (name: string) => {
        return name;
    };

    return (
        <FormContext.Provider
            value={
                {
                    handleSubmit: handleSubmit,
                    sendingValues: sendingValues,
                    formValues: formValues,
                    clearFormValue: clearFormValue,
                    setFormField: setFormFieldArray,
                    getInitialValue: getInitialValue,
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