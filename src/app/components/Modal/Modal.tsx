import React, { PropsWithChildren, useCallback, useEffect } from "react";
import { Container, ModalBackGround, ModalCloseButton, ModalFooter, ModalHeader } from "./style";
import { Dialog, DialogProps } from "primereact/dialog";
interface IModalProps extends DialogProps {
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
        <ModalBackGround
            visible={visible}
        >
            <Dialog
                header={header}
                visible={visible}
                footer={footer}
                onHide={onHide}
            >
                {children}
            </Dialog>
        </ModalBackGround>
    );
};