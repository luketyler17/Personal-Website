import React from "react"
import NavBar from "./NavBar"
import styled from "styled-components"
import HeadShot from "./HeadShot"
const BigWrap = styled.div`
`

const SplashPage = () => {

    return (
        <BigWrap>
            <NavBar/>
            <HeadShot />
        </BigWrap>
    )
}
export default SplashPage