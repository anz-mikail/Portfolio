import React from 'react';
import Slider from "react-slick";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import '../Portfolio.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from '../Arrow'

import silantImage1 from "../../../../styles/prj_image/Снимок экрана (28).png";
import silantImage2 from "../../../../styles/prj_image/Снимок экрана (29).png";
import silantImage3 from "../../../../styles/prj_image/Снимок экрана (30).png";
import silantImage4 from "../../../../styles/prj_image/Снимок экрана (31).png";
import silantImage5 from "../../../../styles/prj_image/Снимок экрана (32).png";
import silantImage6 from "../../../../styles/prj_image/Снимок экрана (34).png";
import silantImage7 from "../../../../styles/prj_image/Снимок экрана (35).png";
import {ChangeBackToHome} from "../../../../store/slice";


function Silant () {

    const dispatch = useDispatch()
    const language = useSelector(state => state.Data.language)
    const theme = useSelector(state => state.Data.theme)
    const navigate = useNavigate();

    const handleClickBackToHome = () => {
        dispatch(ChangeBackToHome())
        navigate('/');
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <div className="title-container">
                <h2 className={theme ? 'title' : 'title white'}>
                    {language ? 'Silant project' : 'Проект Силант'}
                </h2>
            </div>
            <Slider {...settings}>
                <div className="slider-container">
                    <img src={silantImage1} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={silantImage2} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={silantImage3} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={silantImage4} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={silantImage5} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={silantImage6} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={silantImage7} className="prj-img" alt='img'/>
                </div>
            </Slider>
            <div className="title-container">
                <p
                    onClick={handleClickBackToHome}
                    className={theme ? 'linkToBack' : 'linkToBack white'}>
                    {!language ? 'Вернуться обратно' : 'Back to Home'}
                </p>
            </div>
        </>
    )
}


export default Silant;