import React from "react";
import { Dialog, DialogProps } from "primereact/dialog";
import { Cols, GridSystem } from "../GridLayout/Grid/Grid";
interface IModalProps extends DialogProps {
    col?: Cols
};

export const Modal: React.FC<IModalProps> = ({
    children,
    header,
    visible,
    footer,
    onHide,
    ...props
}) => {
    return (
        <Dialog
            header={header}
            visible={visible}
            footer={footer}
            onHide={onHide}
            {...props}
        >
            <GridSystem container justify="center">
                {children}
            </GridSystem>
        </Dialog>
    );
};