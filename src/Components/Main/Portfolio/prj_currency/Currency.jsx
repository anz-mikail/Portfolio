import React from 'react';
import Slider from "react-slick";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import '../prj.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from '../Arrow'

import currencyImage1 from "../../../../styles/prj_image/Снимок экрана (47).png";
import currencyImage2 from "../../../../styles/prj_image/Снимок экрана (43).png";
import currencyImage3 from "../../../../styles/prj_image/Снимок экрана (45).png";
import currencyImage4 from "../../../../styles/prj_image/Снимок экрана (46).png";
import currencyImage5 from "../../../../styles/prj_image/Снимок экрана (48).png";
import currencyImage6 from "../../../../styles/prj_image/Снимок экрана (49).png";
import currencyImage7 from "../../../../styles/prj_image/Снимок экрана (50).png";
import {ChangeBackToHome} from "../../../../store/slice";


function Currency () {

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
                <h3 className={theme ? 'title' : 'title white'}>
                    {language ? 'Сrypto wallet' : 'Проект Криптокошелёк'}
                </h3>
            </div>
            <div className='text-container'>
                <p>Криптокошелёк (тестовое задание)</p>
                <ul><p>В рамках задания реализовал frontend следующим образом :</p>
                    <li>Использовал React, TypeScript и Redux Toolkit.</li>
                    <li>Отображение списка активов с полями:
                        название, количество, текущая цена, общая стоимость, изменение за 24 часа (в процентах),
                        доля в портфеле (в процентах от общей стоимости).
                    </li>
                    <li>Интегрировал WebSocket для real-time обновления цен Bitcoin и других активов.</li>
                    <li>Форму для добавления активов.</li>
                    <li>Локальное сохранение активов после добавления.</li>
                    <li>Удаление на клик по активу. </li>
                    <li>Виртуализация списка для поддержки более 100 активов.</li>
                </ul>
                <a href='https://github.com/anz-mikail/Currency_Wallet_React.git' target='_blank' rel="noreferrer">Исходный код</a>
            </div>
            <Slider {...settings}>
                <div className="slider-container">
                    <img src={currencyImage1} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={currencyImage2} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={currencyImage3} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={currencyImage4} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={currencyImage5} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={currencyImage6} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={currencyImage7} className="prj-img" alt='img'/>
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


export default Currency;