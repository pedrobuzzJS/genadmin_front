import React, { useState } from "react";
import { Form } from "../../components/Form/Form";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";
import { FormInputs } from "../../utils/FormFields";
import { InputDefault } from "../../components/Form/Inputs/InputDefault/InputDefault";

export const StatusForm: React.FC = () => {
    const [ inputs ] = useState<FormInputs[]>([
        {key: true,name: "id",id: "id",label: "Código",placeholder: "Código",cols: 2,disabled: true,},
        {name: "name",id: "name",label: "Nome",placeholder: "Nome",cols: 2,},
        {name: "description",id: "description",label: "Descrição",placeholder: "Descrição",cols: 2,},
        {name: "color",id: "color",label: "Cor",placeholder: "Cor",cols: 2,},
    ]);

    return (
        <>
            <GridSystem
                container
                justify="start"
            >
                <GridSystem
                    item
                    cols={12}
                >
                    <Form>
                        <InputDefault
                            name={"name"}
                            id={"id"}
                            label={"labe"}
                            placeholder={"Input"}
                        />
                    </Form>
                </GridSystem>
            </GridSystem>
        </>
    );
};