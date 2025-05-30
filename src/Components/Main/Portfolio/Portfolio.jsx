import React from 'react';
import {useNavigate} from "react-router-dom";
import './Portfolio.css'
import separator from "../../../styles/icons/separatorBlack.svg";
import {useSelector} from "react-redux";
import silantImage from "../../../styles/prj_image/Снимок экрана (28).png";
import currencyImage from "../../../styles/prj_image/Снимок экрана (47).png";
import scanImage from "../../../styles/prj_image/Снимок экрана (36).png";
import zooImage from "../../../styles/prj_image/Снимок экрана (52).png";


function Portfolio () {
    const language = useSelector(state => state.Data.language)
    const theme = useSelector(state => state.Data.theme)
    const navigate = useNavigate();

    const handleSilantClick = () => {
        navigate('/silant');
    }
    const handleScanClick = () => {
        navigate('/scan');
    }
    const handleCurrencyClick = () => {
        navigate('/currency');
    }
    const handleZooBotClick = () => {
        navigate('/zoobot');
    }
    return (
        <>
            <div className="title-container">
                <h3 className={theme ? 'title' : 'title white'}>
                    {language ? 'PORTFOLIO' : 'Мои проекты'}
                </h3>
            </div>
            <div className='portfolios-container'>
                <img src={silantImage} alt='img'
                     className={!theme?'prjImage': 'prjImage white'}
                     onClick={handleSilantClick}/>
                <img src={currencyImage} alt='img'
                     className={!theme?'prjImage': 'prjImage white'}
                     onClick={handleCurrencyClick}/>
                <img src={scanImage} alt='img'
                     className={!theme?'prjImage': 'prjImage white'}
                     onClick={handleScanClick}/>
                <img src={zooImage} alt='img'
                     className={!theme?'prjImage': 'prjImage white'}
                     onClick={handleZooBotClick}/>
            </div>
            <div className="title-container">
                <img src={separator}
                     alt='img'
                     className='separator'/>
            </div>
        </>
    )
}


export default Portfolio;