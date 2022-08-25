import React from "react";
import styled from 'styled-components';

const DivWrapper = styled.div`
    height: 100%;
    align-items: center;
    justify-content: center;
    align-items: center;
    justify-content: center;
    text-align:center;
    padding-top: 69px;
    > img {
        border: 1px solid black;
        margin-top: 25px;
        border-radius: 100%;
    }
    `
const InnerDivTag = styled.div`

    > p {
        display: inline-block;
        width: 45%;
        align-items: center;
        text-align: center;
        line-height: 25px;
    }

`

const HeadShot = () => {
    return(
        <DivWrapper>
                <img src={require('../assets/1645661637024 .jpeg')} alt="picture of me"/>
                <InnerDivTag> 
                    <h2>About me!
                        </h2>
                    <p>
                    Hello! I am Luke Tyler, an aspiring software developer. I made this website in React.js to showcase some of the skill's I've gained from my DoD funded Coding Bootcamp. I worked for about 12 weeks to learn all I could about Full-Stack development.
                    Including everything I've learned from Galvanize Inc, I am also pursuing a bachelor's in Cyber Engineering from the University of Arionza. During my time in college I have had the opprotunity to develop in C, Assembly and Python.
                    </p>
                </InnerDivTag>
        </DivWrapper>

    )

}

export default HeadShot;