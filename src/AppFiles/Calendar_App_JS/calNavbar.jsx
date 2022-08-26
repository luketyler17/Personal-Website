import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Logo from '../Calendar_App_JS/default-monochrome-white.svg'
const NavWrap = styled.div`
border: .5px solid grey;
height: 50px;
width: 100%;
margin: 0 auto;
background-color: #FFFFFF;
position: fixed;
overflow: hidden;
top: 0;
left: 0;
z-index: 999;
`
const LogoWrap = styled.div`
`
const ListWrap = styled.ul`
width: 20%;
height: 100%;
margin: 0 auto;
right:0;
position: absolute;
text-align: center;
align-items: center;
justify-content: center;
padding: 0;
`
const InnerList = styled.li`
display: inline-block;
height: 100%;
color: black;
margin-right: auto;
margin-left: auto;
list-style-type: none;
width: 100px;;
text-align: center;
&:hover {
    cursor: pointer;
}
`


const CalNavBar = () => {
    const navigate = useNavigate()
    return(
        <NavWrap>
            <LogoWrap>
                <img src='../default-monochrome-white.svg' alt="company logo" />
            </LogoWrap>
            <ListWrap>
                <InnerList onClick={() => navigate("/")}>
                    GO TO LEFT - Main LOGO
                </InnerList>
                <InnerList onClick={() => navigate("/")}>
                    Name of the Calendar
                </InnerList>
                <InnerList onClick={() => navigate("/")}>
                    USERNAME
                </InnerList>
                <InnerList onClick={() => navigate("/contact")}>
                    SETTING BUTTON
                </InnerList>
                <InnerList onClick={() => navigate("/projects")}>
                    SEARCH?
                </InnerList>
                <InnerList onClick={() => navigate("/projects")}>
                    HAMBURGER MENU
                </InnerList>
                <InnerList onClick={() => navigate("/projects")}>
                    Projects
                </InnerList>
                <InnerList onClick={() => navigate("/projects")}>
                    Projects
                </InnerList>
            </ListWrap>
        </NavWrap>
    )
}


export default CalNavBar