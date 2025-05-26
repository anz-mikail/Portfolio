import React from 'react';
import Slider from "react-slick";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import '../prj.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from '../Arrow'

import scanImage1 from "../../../../styles/prj_image/Снимок экрана (36).png";
import scanImage2 from "../../../../styles/prj_image/Снимок экрана (37).png";
import scanImage3 from "../../../../styles/prj_image/Снимок экрана (38).png";
import scanImage4 from "../../../../styles/prj_image/Снимок экрана (39).png";
import scanImage5 from "../../../../styles/prj_image/Снимок экрана (40).png";
import scanImage6 from "../../../../styles/prj_image/Снимок экрана (41).png";
import scanImage7 from "../../../../styles/prj_image/Снимок экрана (42).png";
import {ChangeBackToHome} from "../../../../store/slice";


function Scan () {

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
                    {language ? 'Scan project' : 'Проект СКАН'}
                </h3>
            </div>
            <div className='text-container'>
                <p>СКАН (учебный проект)</p>
                <p>О проекте:</p>
                <p> - Это сервис поиска публикаций о компании по её ИНН.
                </p>
                <ul><p>Создал frontend часть проекта в котором:</p>
                    <li>Сверстал необходимые части интерфейса с макета figma.</li>
                    <li>Адаптировал свёрстанные страницы под мобильную версию.</li>
                    <li>Настроил роутинг и разделение прав, так что все страницы, кроме главной,
                        должны быть доступны только зарегистрированному пользователю.</li>
                    <li>Подключил бэкенд-часть к фронтенду и настроил отправку запросов.</li>
                    <li>Отладил детали для гладкого UX (пользовательского опыта):
                        добавил лоадеры, валидацию форм и оповещения.</li>
                </ul>
                <a href='https://github.com/anz-mikail/Scan_React.git' target='_blank' rel="noreferrer">Исходный
                    код</a>
            </div>
            <Slider {...settings}>
                <div className="slider-container">
                    <img src={scanImage1} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={scanImage2} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={scanImage3} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={scanImage4} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={scanImage5} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={scanImage6} className="prj-img" alt='img'/>
                </div>
                <div className="slider-container">
                    <img src={scanImage7} className="prj-img" alt='img'/>
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


export default Scan;