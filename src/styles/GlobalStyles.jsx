import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: "Prompt", sans-serif;
    }

    body{
        min-height: 100dvh;
        background-color: ${({theme}) => theme.color.graphite};
        background-image: url('/images/Símbolo.svg'), url('/images/Símbolo.svg');
        background-repeat: no-repeat, no-repeat;
        background-position: 10% top, 90% bottom;
    }
    
`;