import React from 'react';
import './Main.css'
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import ContactMe from "./ContactMe/ContactMe";


function Main () {
    return (
        <>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <ContactMe/>
        </>
    )
}


export default Main;