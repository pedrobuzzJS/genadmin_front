import styled, { css } from "styled-components";

interface ShowMenuToggle {
    disabled: boolean;
    superOpenSideBar?: boolean;
}

export const SideBar = styled.aside<ShowMenuToggle>`
    background: #463f64;
    height: 100%;
    width: ${({ disabled }) => (disabled && disabled === true ? '250px' : '50px')};
    transition: all 0.4s;
    position: fixed;
    z-index: 10;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    };
`;

export const SideBarItemList = styled.div`
    &:first-child {
        margin-top: 50px;
    }
    &:nth-last-child(2) {
        margin-bottom: 32px;
    }
`;

export const HambugerMenu = styled.div<ShowMenuToggle>`
    height: 50px;
    width: ${({ disabled }) => (disabled && disabled === true ? '250px' : '50px')};
    color: #fff;
    background: #463f64;
    cursor: pointer;
    transition: all 0.4s;
`;

export const MenuButton = styled.div`
    width: 100%;
    height: 50px;
    max-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div<ShowMenuToggle>`
    width: 100%;
    height: 100%;
    padding-top: 70px;
    padding-right: 10px;
    padding-left: ${({ disabled }) => (disabled && disabled === true ? '60px' : '60px')};

    ${props => props?.superOpenSideBar === true && css`
        padding-left: 260px;
    `}

    transition: all 0.4s;
    position: relative;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }

    ::-webkit-scrollbar-thumb:window-inactive {
        background: rgba(255, 255, 255, 0.3);
    }
`;

export const TopMenu = styled.div`
    position: fixed;
    width: 100%;
    height: 15px;
    padding-bottom: 50px;
    right: 0;
    background: #272b36;
    z-index: 20;

    .loadingBar {
        position: fixed;
        z-index: 100;
        top: -15px;
        left: -5px;
        width: 105%;

        > span {
            display: none;
        }
        
        > div {
            
            div > {
                border-radius: 0;
            }

        }
    }
`;

// export const ExitSection = styled.div<ShowMenuToggle>`
//     position: fixed;
//     display: flex;
//     justify-content: center;
//     bottom: 0;
//     height: 35px;
//     width: ${({ disabled }) => (disabled && disabled === true ? '250px' : '50px')};
//     background: black;
//     color: white;
//     transition: all 0.4s;

//     > svg {
//         display: block;
//         padding: 5px;
//         cursor: pointer;
//     }
// `;