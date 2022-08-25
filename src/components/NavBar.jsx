import React from "react";
import styled from 'styled-components';

const NavWrap = styled.div`
border: 1px solid black;
height: 67px;
width: 100%;
margin: 0 auto;
background-color: #000000;
position: fixed;
overflow: hidden;
top: 0;
left: 0;

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
color: rgba(255,255,255,1);
margin-right: auto;
margin-left: auto;
list-style-type: none;
width: 100px;;
text-align: center;
padding-top: 25px;
&:hover {
    background-color: grey;
    border-radius: 10%;
    cursor: pointer;
}
`

const NavBar = () => {

    return(
        <NavWrap>
            <LogoWrap>
            </LogoWrap>
            <ListWrap>
                <InnerList>
                    Home
                </InnerList>
                <InnerList>
                    Contact Me
                </InnerList>
                <InnerList>
                    Projects
                </InnerList>
            </ListWrap>
        </NavWrap>
    )
}

export default NavBar