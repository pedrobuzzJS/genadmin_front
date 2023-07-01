import React, { ButtonHTMLAttributes, useCallback, useRef, useState } from "react";
// import Button
import { ButtonConteinar, DropDownContent, DropDownOption, StyledButton } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonDescription: String;
    icon?: string;
    hasBackGround?: boolean;
    dropDownOption?: any[];
    isDropDown?: boolean;
    children?: React.ReactElement
};

export const Button: React.FC<ButtonProps> = ({
    buttonDescription, 
    dropDownOption, 
    isDropDown=false, 
    children, ...props
}) => {

    const [ isDropDownOpen, setIsDropDownOpen ] = useState<boolean>(false);
    const buttonRef = useRef(null);

    const openDropDown = useCallback(() => {
        setIsDropDownOpen(true);
    }, []);
    const closeDropDown = useCallback(() => {
        setIsDropDownOpen(false);
    }, []);

    return (
        <ButtonConteinar
            onMouseOver={openDropDown}
            onMouseLeave={closeDropDown}
        >
            <StyledButton
                ref={buttonRef}
                {...props}
            >
                {buttonDescription}
                {dropDownOption?.length 
                    ?
                    <DropDownOption />
                    :
                    <></>
                }
                {children 
                    ?
                    <DropDownOption
                    >
                        {children}
                    </DropDownOption>
                    :
                    <></>
                }
            </StyledButton>
            <DropDownContent
                disabled={isDropDownOpen}
                hasDropDown={Boolean(children)}
            >
                {children}
            </DropDownContent>
            <DropDownContent
                disabled={isDropDownOpen}
                hasDropDown={Boolean(dropDownOption?.length)}
            >
                {dropDownOption?.map((btn, index) => (
                    <Button
                        key={index}
                        buttonDescription={btn.title}
                        dropDownOption={btn.dropDownButtons}
                        {...btn}
                    />
                ))}
            </DropDownContent>
        </ButtonConteinar>
    );
};