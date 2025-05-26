import React from 'react';
import Slider from "react-slick";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import '../prj.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from '../Arrow'

import {ChangeBackToHome} from "../../../../store/slice";
import zooImage1 from "../../../../styles/prj_image/Снимок экрана (52).png";
import zooImage2 from "../../../../styles/prj_image/Снимок экрана (53).png";
import zooImage3 from "../../../../styles/prj_image/Снимок экрана (54).png";
import zooImage4 from "../../../../styles/prj_image/Снимок экрана (55).png";
import zooImage5 from "../../../../styles/prj_image/Снимок экрана (58).png";


function ZooBot () {

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
                    {language ? 'ZooBot' : 'ЗооБот'}
                </h3>
            </div>
            <div className='text-container'>
                <p>Телеграм бот (учебный)</p>
                <p>О боте:</p>
                <p> - Это бот оснащённый модулем для проведения викторины, состоящей из вопросов с несколькими
                    вариантами ответов. Бот содержит алгоритм, способный назначать животных на основе ответов пользователя.
                </p>
                <ul><p>В telegram bot-е реализовал следующие функции:</p>
                    <li>Контактный механизм — в боте есть возможность легко связаться с сотрудником зоопарка для получения
                        дополнительной информации.</li>
                    <li>Возможность перезапуска — бот предлагает пользователю перезапустить викторину с помощью кнопки
                        «Попробовать ещё раз?».</li>
                    <li>Механизм обратной связи — бот может собирать отзывы пользователей для дальнейшего совершенствования.</li>
                    <li>Конфиденциальность и безопасность данных — бот соблюдает правила конфиденциальности данных
                        и собирает только те данные, которые необходимы для его работы. В нём также есть механизмы
                        защиты данных от несанкционированного доступа.</li>
                    <li>Масштабируемость — бот спроектирован таким образом, чтобы работать и в случае увеличения количества
                        пользователей. То есть бот сможет без проблем справиться с ростом количества взаимодействий.</li>
                    <li>Мониторинг производительности — бот отслеживает производительность и регистрирует ошибки,
                        чтобы обеспечить бесперебойную работу и устранение неполадок.</li>
                </ul>
                <a href='https://github.com/anz-mikail/ZooBot_Telegram.git' target='_blank' rel="noreferrer">Исходный
                    код</a>
            </div>
            <Slider {...settings}>
                <div className="slider-container">
                    <img src={zooImage1} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={zooImage2} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={zooImage3} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={zooImage4} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={zooImage5} className="prj-img" alt='img'/>
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


export default ZooBot;