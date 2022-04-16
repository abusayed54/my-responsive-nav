import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
    return (
        <LayoutStyled>
            <div className='content-center'>
                <h1>{children}</h1>
            </div>
        </LayoutStyled>
    );
};
const LayoutStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: calc(100vh - var(--header-height));
.content-center{
    height:300px;
    width:300px;
    background:linear-gradient(45deg,var(--bg-color), var(--bg-hover-color));
    border-radius:42% 58% 0% 100% / 58% 47% 53% 42% ;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}




h1{
    color: #eb4d4b;
}
`
export default Layout;