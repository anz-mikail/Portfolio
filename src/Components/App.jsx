import React from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import './App.css';
import AboutMe from "./Main/AboutMe/AboutMe";
import Skills from "./Main/Skills/Skills";
import Portfolio from "./Main/Portfolio/Portfolio";
import ContactMe from "./Main/ContactMe/ContactMe";
import {Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ChangeMenuActive} from "../store/slice";



function App() {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.Data.theme)
    const menuActive = useSelector(state => state.Data.menuActive)
    const handleChangeMenuActive = () => {
        if (!menuActive) {dispatch(ChangeMenuActive())}
    }
    return (

        <div className={theme? "App" : "App white"}>
            <Header/>
            <main
                style={!menuActive? {cursor: "pointer"} : {}}
                onClick={handleChangeMenuActive}
                className={theme ? "body" : 'body white'}>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/about-me' element={<AboutMe/>}/>
                    <Route path='/skills' element={<Skills/>}/>
                    <Route path='/portfolio' element={<Portfolio/>}/>
                    <Route path='/contact-me' element={<ContactMe/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
  );
}


export default App;
