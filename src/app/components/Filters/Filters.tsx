import React from "react";
import { InputDefault } from "../Form/Inputs/InputDefault/InputDefault";
import { GridSystem } from "../GridLayout/Grid/Grid";
import { FilterContainer } from "./style";

export const Filters: React.FC = () => {
    return (
        <FilterContainer>
            <GridSystem
                container
                justify="center"
            >
                <GridSystem
                    item
                    cols={4}
                >
                    <InputDefault
                        name={"1"}
                        id={"1"}
                        label={"1"}
                        type="text"
                    />
                </GridSystem>
                <GridSystem
                    item
                    cols={4}
                >
                    <InputDefault
                        name={"2"}
                        id={"2"}
                        label={"2"}
                        type="text"
                    />
                </GridSystem>
                <GridSystem
                    item
                    cols={4}
                >
                    <InputDefault
                        name={"3"}
                        id={"3"}
                        label={"3"}
                        type="text"
                    />
                </GridSystem>
            </GridSystem>
        </FilterContainer>
    );
};