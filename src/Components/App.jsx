import React from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import {Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ChangeMenuActive} from "../store/slice";
import './App.css';
import Silant from "./Main/Portfolio/prj_silant/Silant";
import Scan from "./Main/Portfolio/prj_scan/Scan";
import Currency from "./Main/Portfolio/prj_currency/Currency";
import ZooBot from "./Main/Portfolio/prj_zooBot/ZooBot";


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
                    <Route path='/silant' element={<Silant/>}/>
                    <Route path='/scan' element={<Scan/>}/>
                    <Route path='/currency' element={<Currency/>}/>
                    <Route path='/zoobot' element={<ZooBot/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
  );
}


export default App;
