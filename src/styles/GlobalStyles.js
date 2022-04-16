import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;;
}

:root{
    --bg-color: #30336b;
    --text-color:#dff9fb;
    --bg-hover-color:#130f40;
    --hover-text-color: #eb4d4b;
    --header-height: 80px;
    --w-full: 100%;
}


`