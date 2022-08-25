import React from "react";
import styled from "styled-components";
import '../css_files/ProjectCard.css'
import { useNavigate } from "react-router-dom";

const ProjectCard = (props) => {
    const navigate = useNavigate()
    return (
        <div className="outerDiv">
            <div className="innerDiv">
                <img src={props.data.imgSrc} alt="picture" onClick={() => navigate(props.data.linkTree)} />
            </div>
        </div>
    )
}

export default ProjectCard