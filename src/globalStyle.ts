import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * { 
        box-sizing: border-box;
    }
    body { 
        margin: 0;
        /* TODO */
        font-family: "Iran Yekan"
    }
    .secondary-color {
        color: #858c96;
    }
`;

export default GlobalStyle;
