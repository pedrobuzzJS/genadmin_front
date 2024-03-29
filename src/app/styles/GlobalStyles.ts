import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        
        height: 100%;
        width: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    ul {
        list-style: none;
    }

    html {
        background: #eee;
    }

    /***********************/
    /* DEFAULT VAR COLORS  */
    /********************* */

    :root {
        --primary:      #007BFF;
        --secondary:    #6C757D;
        --succes:       #28A745;
        --error:        #DC3545;
        --warning:      #FFC107;
        --info:         #17A2B8;
        --white:        #fff;
        --blue: #007bff;
        --indigo: #6610f2;
        --purple: #6f42c1;
        --pink: #e83e8c;
        --red: #dc3545;
        --orange: #fd7e14;
        --yellow: #ffc107;
        --green: #28a745;
        --teal: #20c997;
        --cyan: #17a2b8;
        --gray: #6c757d;
        --dark-gray: #343a40;
        --light: #f8f9fa;
        --dark: #343a40;
        --link:         #5d80d6;
        --input-color: black; 
        --input-border: #CDD9ED;
        --input-background: #fff;
        --input-placeholder: #CBD1DC;
        --input-border-focus: #275EFE;
        --group-color: var(--input-color);
        --group-border: var(--input-border);
        --group-background: #EEF4FF;
        --group-color-focus: #fff;
        --group-border-focus: var(--input-border-focus);
        --group-background-focus: #678EFE;
    }

    /**********/
    /* inputs */
    /**********/

    

    /*****************/
    /* MODAL STYLES  */
    /*****************/

    .p-dialog {
        min-width: 50%;
        min-height: 50%;

        width: 75%;
        height: 75%;

        max-width: 90%;
        max-height: 90%;
        
        .p-dialog-header {
            position: relative;

            .p-dialog-header-icons {
                position: absolute;
                right: 15px;
            }
        

            &::after {
                content: "";
                height: 1px;
                background: #e2e2e2;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
            }
        }

        .p-dialog-content {
            background: #fafafa;
        }

        .p-dialog-footer {
            background-color: #ffffff;
            position: relative;
            margin: 0;
            padding: 0;

            &::before {
                content: "";
                height: 1px;
                background: #e2e2e2;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
            }
        }

        .p-dialog-content {
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
        }
    }
`;