import React from "react";
import { Button, ButtonProps } from 'primereact/button';

type ButtonTypes = 'p-button-secondary' | 'p-button-success' | 'p-button-info' | 'p-button-warning' | 'p-button-help' | 'p-button-danger';
interface IButtonProps extends ButtonProps {
    className?: ButtonTypes;
};

export const GenButton: React.FC<IButtonProps> = ({
    label,
    className,
    ...props
}) => {
    // const buttonRef = useRef(null);

    return (
        <Button
            label={label}
            loading={false}
            className={className}
            {...props}
        />
    );
};