import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(true);
    const [screenSize, setScreenSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (screenSize.width > 790 && menuOpen) {
            setMenuOpen(false)
        }
    }, [screenSize.width, menuOpen])

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p)
    };

    //Dynamic Classes
    let menuOpenClass = menuOpen ? "isMenu" : "";

    return (
        <HeaderStyled>
            <div className="header">
                <div className="header-content">
                    <h1 className='logo'>Navbar</h1>
                    <nav className={`nav-content ${menuOpenClass}`}>
                        <ul>
                            <li><LinkStyled to="/" onClick={menuToggleHandler}>Home</LinkStyled></li>
                            <li><LinkStyled to="/about-us" onClick={menuToggleHandler}>About Us</LinkStyled></li>
                            <li><LinkStyled to="/features" onClick={menuToggleHandler}>Features</LinkStyled></li>
                            <li><LinkStyled to="/gallery" onClick={menuToggleHandler}>Gallery</LinkStyled></li>
                            {/* <li><LinkStyled to="/contact-us">Contact Us</LinkStyled></li> */}
                        </ul>
                    </nav>
                    <div className='icons'>
                        {!menuOpen ? (<MenuIcon onClick={menuToggleHandler} />) : (<CloseIcon onClick={menuToggleHandler} />)}
                    </div>
                </div>
            </div>
        </HeaderStyled >
    );
};
const LinkStyled = styled(Link)`
text-decoration: none;
color:var(--text-color);
padding: 10px 20px;
transition: 0.3s ease all;
&:hover{
    background-color: var(--bg-hover-color);
    border-radius: 8px;
}
@media screen and (max-width:790px){
    letter-spacing: 3px;
}
`;
const HeaderStyled = styled.div`
background-color: var(--bg-color);
height: var(--header-height);
width: var(--w-full);

.header{
    padding: 0 1.5rem;
    transition: 0.3s ease all;
    padding-top: 15px;
    .header-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo{
            color:var(--text-color);
            font-weight: 700;
        }
        .nav-content{
            ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            li{
                list-style: none;
                padding: 10px 20px;
                border-radius: 5px;
                transition: 0.1s ease all;
                &:hover{
                    background-color: var(--bg-hover-color);
                    letter-spacing: 4px;
                }
            }
        }
        }
       
        
        .icons{
            display: none;
        }
    }
};

@media screen and (max-width:790px){
    .header{
        padding: 0 3rem;
        padding-top: 15px;
        overflow: hidden;
        .header-content{
            z-index: 100;
            position: relative;
            .nav-content{
               position: fixed;
               top:0;
               bottom: 0;
               right: 100%;
               width: 100%;
               height: 100vh;
               background: rgba(0,0,0, 0.8);
               backdrop-filter: blur(5px);
               display: flex;
               justify-content: center;
               align-items: center;
               text-align: center;
               transform: translate(0);
               transition: 0.3s ease transform;

                ul{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  li{
                      font-size: 2rem;
                    &:not(:last-child){
                    margin-bottom: 20px;
                        }
                  }
            }
        }
        
            .icons{
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                transition: 0.3s ease all;
                
                svg{
                    color: white;
                    font-size: 2rem;
                    cursor: pointer;
                }
            }
            .isMenu{
                transform: translate(100%);
            }
        }
    }
}

`
export default Header;