import React, { PropsWithChildren, useState } from "react";
import { useAuth } from "../../../context/authContext";
import { useFetch } from "../../../hooks/useFetch";
import { LinkMenu } from "../../../model/LinkMenu";
import { SideBarItem } from "../SideBarItem/SideBarItem";
import {    SideBar,
            Content,
            TopMenu,
            ExitSection,
            HambugerMenu,
            SideBarItemList
} from "./style";
import { FaPix } from "react-icons/fa6";
import { Icons } from "../../../helpers/Icons";

export const SideBarLayout: React.FC<PropsWithChildren> = ({children}) => {
    const { data, loading } = useFetch<LinkMenu[]>("menu");
    const [ isSideBarOpen, setIsSideBarOpen ] = useState<boolean>(false);
    const [ superOpenSideBar, setSuperOpenSideBar ] = useState<boolean>(false);

    const toggleSideBar = () => {
        setSuperOpenSideBar(!superOpenSideBar);
        setIsSideBarOpen(!superOpenSideBar)
    };

    const handleSideBar = (open: boolean) => {
        if (superOpenSideBar === true) {
            return;
        } 
        setTimeout( () => {
            setIsSideBarOpen(open);
        }, 150);
    };

    const { signOut } = useAuth();

    let LinksTratados: LinkMenu[] = [];

    const buildChildrenLinks = (linkPai: LinkMenu, linkList: LinkMenu[]) => {
        const indexLinkPai = linkList.findIndex((link => link.parent_id === linkPai.id));
        const linkFilhosRetorno: LinkMenu[] = [];
        if (indexLinkPai !== 1) {
            linkList.forEach((link, index) => {
                if (link.parent_id === linkPai.id) {
                    link.childrens = buildChildrenLinks(link, linkList);
                    linkFilhosRetorno.push(link);
                };
            });
        };
        return linkFilhosRetorno;
    };
    
    data?.forEach((link, index) => {
        link.childrens = buildChildrenLinks(link, data);
        LinksTratados.push(link);
    });

    LinksTratados = LinksTratados.filter(link => link.parent_id === null);
    
    return (
        <>
            <SideBar
                disabled={isSideBarOpen}
                onMouseOver={() => handleSideBar(true)}
                onMouseLeave={() => handleSideBar(false)}
            >
                <SideBarItemList>
                    {LinksTratados && LinksTratados?.map((item) => (
                                            <SideBarItem
                                                key={item.id}
                                                id={item.id}
                                                name={item.name}
                                                icon={item.icon}
                                                has_childrens={item.has_childrens}
                                                childrens={item.childrens ?? item.childrens}
                                                disabled={item.disabled}
                                                parent_id={item.parent_id}
                                                route={item?.route}
                                            />
                                            )
                                        )
                    }
                </SideBarItemList>
            </SideBar>
            <TopMenu>
                <HambugerMenu>
                    <Icons
                        iconName={"FaBars"}
                        onClick={toggleSideBar}
                        size={35}
                    />
                </HambugerMenu>
            </TopMenu>
            <Content
                disabled={isSideBarOpen}
                superOpenSideBar={superOpenSideBar}
            >
                {children}
            </Content>
        </>
    );
};