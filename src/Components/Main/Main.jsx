import React, {useEffect} from 'react';
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import ContactMe from "./ContactMe/ContactMe";
import {useDispatch, useSelector} from "react-redux";
import {ChangeBackToHome} from "../../store/slice";


function Main () {

    const backToHome = useSelector(state => state.Data.backToHome)
    const dispatch = useDispatch()

    useEffect(() => {
        if (backToHome) {
            window.scrollTo({ top: 1500, behavior: 'smooth' })
            dispatch(ChangeBackToHome())
        }
    })
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