import React from "react";
import { GridSystem } from "../../components/GridLayout/Grid/Grid";

export const HomePage: React.FC = () => {
    return (
        <>
            <GridSystem
                container
                justify="center"
            >
                <GridSystem
                    item
                    cols={12}
                >
                    <h1>oi</h1>
                    <i className="ph ph-barcode"></i>
                </GridSystem>
            </GridSystem>
        </>
    );
};