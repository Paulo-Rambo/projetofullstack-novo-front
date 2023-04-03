import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    :root{
        --color-primary:#FF577F;
        --color-primary-focus:#FF427F;a
        --color-primary-disabled:#59323F;
        --color-grey-2:#42ad8a;
        --color-grey-0:#42ad8a;
        --color-grey-1:#868E96;
        --color-grey-3:#212529;
        --color-grey-4:#f7faf9;
        --color-sucess:#3FE864;
        --color-negative:#E83F5B;
        --color-background: #f7faf9;
        --color-form-background: white;
        --size-font-title-1: 16px;
        --size-font-title-2: 24px;
        --size-font-title-3: 19px;
        --size-font-paragraph-1: 16px;
        --size-font-paragraph-small: 10px;
        --border-radius-0:3.2px;
        --border-radius-1:5px;
        --border-radius-2:4px;
        --height--button-1: 35px;
        --button-font-size-1:12px; 
        --button-padding-1:16px;
        --height--input-1: 35px;
        --error-message-size:10px;
        --container-margin-1:15px;
        --container-margin-2:17vw;
        --input-placeholder-1:12px;
        --input-div-heigth-1:75px;
        --itens-gap:16px;
        --add-button-size:32px;

    }
    @media (min-width: 420px){
        :root{
            --size-font-title-1: 22px;
            --size-font-title-2:28px;
            --size-font-paragraph-1: 16px;
            --size-font-paragraph-small: 12px;
            --button-font-size-1:14px;
            --error-message-size:11px;
            --input-placeholder-1:16px;
            --height--input-1: 45px;
            --input-div-heigth-1:90px;
            --height--button-1:45px;
        }
    }
    body{
        background-color: var(--color-background);
        display:flex;
        flex-direction:column;
        align-items:center;
        width:100%;
        height:100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;
