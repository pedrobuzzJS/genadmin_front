import React, { useRef } from "react";
import { Button, ButtonProps } from 'primereact/button';
import { Cols, GridSystem } from "../../GridLayout/Grid/Grid";

type ButtonTypes = 'p-button-secondary' | 'p-button-success' | 'p-button-info' | 'p-button-warning' | 'p-button-help' | 'p-button-danger';
interface IButtonProps extends ButtonProps {
    className?: ButtonTypes;
    col?: Cols
    padding?: number
};

export const GenButton: React.FC<IButtonProps> = ({
    label,
    className,
    col=1,
    children,
    padding,
    ...props
}) => {
    const buttonRef = useRef(null);

    return (
        <GridSystem
            item
            cols={col}
            gap={padding}
        >
            <Button
                ref={buttonRef}
                label={label}
                loading={false}
                className={className}
                style={
                    {
                        width: "100%",
                        height: "100%",
                        maxHeight: "30px",
                        whiteSpace: 'nowrap'
                    }
                }
                {...props}
            >
                {children}
            </Button>
        </GridSystem>
    );
};