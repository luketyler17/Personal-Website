import React from "react";
import NavBar from "./NavBar";
import ProjectCard from "./ProjectCard"
import '../css_files/Projects.css'

const Projects = () => {
    const mappingObject = [
        {name: "Calendar App", imgSrc: '/assets/Calendar_App/default.png', linkTree: '/calendar_app'},
        {name: "Ecommerce App", imgSrc: '/assets/Ecommerce_App/default.png', linkTree: "/ecommerce_app/", dataSrc: "https://fakestoreapi.com/",},
        {name: "Incremental Game", imgSrc: '/assets/Incremental_Game/default.png', linkTree: '/incremental_game'},
        {name: "Air Traffic Controler", imgSrc: '/assets/Air_Traffic_Controler/default.png', linkTree: '/air_traffic_control/'}
    ]
    return (
        <>
            <NavBar />
            <div className='projectCardWrapper'>
                {mappingObject.map((data) =><ProjectCard data={data}/>)}            </div>
        </>
    )
}


export default Projects