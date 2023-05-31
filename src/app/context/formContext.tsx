import React, { createContext, PropsWithChildren, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { Operation } from "../utils/Operation";
import { useSnackBar } from "./snackBarContext";

interface inputField {
    name: any;
    ref: any;
}
interface IFormProps {
    id?: any;
    formValues?: {};
    handleSubmit: (e: React.FormEvent, urlBack: string, op: number) => void;
    addFormValues: () => void;
    sendValues: boolean;
    inputArrayValues: string;
    setFormField: ({name, ref}: inputField) => void;
    getInitialValue: (name: string) => any;
    buildMaintenanceURL: (btn: string, op: number, id?: any) => void;
};

interface FormWithChildren extends PropsWithChildren {};

const FormContext = createContext<IFormProps>({} as IFormProps);

export const FormProvider: React.FC<FormWithChildren> = ({children}) => {
    const [ sendValues, setSendValues ] = useState<boolean>(false);
    const [ inputArrayValues, setInputArrayValues ] = useState("");
    const fieldRefArray: inputField[] = [];
    const setFormFieldArray = ({name, ref}: inputField) => {
        fieldRefArray.push({name, ref});
    };
    var dot = require('dot-object');
    const navigate = useNavigate();

    const buildMaintenanceURL = useCallback( (btn: string, op: number, id?: any) => {
        let url = `${btn}-manutencao/${op}/${id}`;
        return navigate("/"+url);
    }, [navigate]);

    const handleSubmit = async (e: React.FormEvent, urlBack: string, op: number) => {
        e.preventDefault();
        console.log(fieldRefArray);
        setSendValues(!sendValues);
        const formObj = await fieldRefArray.reduce((obj: any, item: any) => ((obj[item?.name] = item?.ref?.value), obj),{});
        const newObjectValues = dot.object(formObj);
        console.log(newObjectValues);
        switch (op) {
            case Operation.INSERT:
                try {
                    await api.post(urlBack, {
                        data: JSON.stringify(newObjectValues)
                    }).then(response => {
                        const { status } = response;
                        navigate(-1)
                    }).catch(async error => {
                    }).finally(
                    );
                } catch (error) {
                    console.log(error);
                };
            break;
            case Operation.ALTER:
                try {
                    await api["put"](urlBack, {
                        data: JSON.stringify(newObjectValues)
                    }).then(response => {
                        const { status } = response;
                        navigate(-1)
                    }).catch(async error => {
                    }).finally(
                    );;
                } catch (error) {
                    console.log(error);
                };
            break;
            case Operation.DELETE:
                try {
                    await api.delete(urlBack, {
                            params: {
                                id: dot.pick("id", newObjectValues)
                            }
                        }
                    ).then(response => {
                        const { status } = response;
                        navigate(-1);
                    }).catch(async error => {
                    }).finally(
                    );
                } catch (error) {
                    console.log(error);
                };
            break;
            case Operation.VIEW:
                navigate(-1);
            break;
        };
    };

    const getInitialValue = (name: string) => {
        return name;
    };

    const addFormValues = () => {

    };

    return (
        <FormContext.Provider
            value={
                {
                    handleSubmit: handleSubmit,
                    addFormValues: addFormValues,
                    sendValues: sendValues,
                    inputArrayValues: inputArrayValues,
                    setFormField: setFormFieldArray,
                    getInitialValue: getInitialValue,
                    buildMaintenanceURL: buildMaintenanceURL
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