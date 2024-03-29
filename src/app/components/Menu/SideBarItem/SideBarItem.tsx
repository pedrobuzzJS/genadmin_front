import React, { useCallback, useState } from "react";
import { LinkMenu } from "../../../model/LinkMenu";
import { Container, ImgContainer, LinkContainer, OpenContainer, StyledMenuText } from "./style";
import { Icons } from "../../../helpers/Icons";

export const SideBarItem: React.FC<LinkMenu> = ({
    id,
    name,
    parameters,
    route,
    icon,
    parent_id,
    childrens,
    component,
    has_childrens,
    order,
    disabled,
    status_id,
    created_at,
    updated_at,
    ...props
}) => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const openSubMenuList = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);
    console.log(icon)
    if (childrens) {
        return (
            <>
                <Container
                    isSubMenuOpen={isOpen}
                >
                    <LinkContainer 
                        to={route || "#"}
                        disabled={disabled}
                    >
                        <StyledMenuText
                            disabled={isOpen}
                        >
                            <Icons
                                iconName={'FaCirclePlus'}
                            />
                            <span>&nbsp;{name}</span>
                        </StyledMenuText>
                            {has_childrens === true && (
                                    <>
                                        <ImgContainer
                                            isSubMenuOpen={isOpen}
                                            onClick={openSubMenuList}
                                        >
                                            <Icons iconName="FaChevronDown" size={15}/>
                                        </ImgContainer>
                                    </>
                                )
                            }
                    </LinkContainer>
                    { childrens.map((child, index) => 
                        <SideBarItem
                            key={index}
                            id={child.id}
                            name={child.name}
                            icon={child.icon}
                            route={child.route}
                            has_childrens={child.has_childrens}
                            childrens={child.childrens ?? child.childrens}
                            parent_id={child.parent_id}
                            disabled={child.disabled}
                        />)
                    }
                </Container>
            </>
        );
    } else {
        return (
            <>
                { disabled === false ?
                    <OpenContainer>
                        <LinkContainer
                            to={route || "#"}
                            disabled={disabled}
                        >
                            <StyledMenuText
                                disabled={isOpen}
                            >
                                <Icons
                                    iconName={"FaCirclePlus"}
                                />
                                <span>{name}</span>
                            </StyledMenuText>
                        </LinkContainer>
                    </OpenContainer>
                    :
                    <>
                </>
                }
            </>
        );
    };
};