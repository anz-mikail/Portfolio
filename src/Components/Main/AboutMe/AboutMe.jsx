import React from 'react';
import './AboutMe.css'
import {useSelector} from "react-redux";


function AboutMe () {
    const language = useSelector(state => state.Data.language)
    return (
        <>
            <div className="brief-info">
                <div className="brief-info_1">
                    <h3>{ language ? 'Анзоров Микаэль': 'Mikael Anzorov'}</h3>
                    <h3>{ language ? 'Fullstack Разработчик на Python' : 'Python Fullstack Developer'}</h3>
                </div>
                <div className="brief-info_2">
                    <img className="photo" alt="my face" width="300"/>
                </div>
            </div>

            <h2>Образование</h2>
            <div className="content_1">
                <div className="content_studies">
                    <span className="studies_1">
                        <h3>Международная Академия Бизнеса и Управления (МАБиУ) г. Москва</h3>
                        <p>Образование: Высшее</p>
                        <p>Форма обучения: очная</p>
                        <p>Год окончания: 2009</p>
                    </span>
                    <span className="studies_2">
                        <p>Факультет: Менеджмент организации</p>
                        <p>Специальность: Административный менеджмент</p>
                    </span>
                </div>
            </div>
            <div className="content_1">
                <div className="content_studies">
                    <span className="studies_1">
                        <h3>Skillfactory</h3>
                        <p>Повышение квалификации</p>
                        <p>Форма обучения: онлайн</p>
                        <p>Год окончания: 2025</p>
                    </span>
                    <span className="studies_2">
                        <p>Специальность: Fullstack разработчик на python</p>
                    </span>
                </div>
            </div>
            <h2>Информация о себе</h2>
            <div className="content_1">
                <ul className="self_info">
                    <li>Место проживания г. Грозный</li>
                    <li>Женат, имею четверо детей</li>
                    <li>Хобби: Crossfit</li>
                    <li>Вредных привычек не имею</li>
                </ul>
            </div>
        </>
    )
}


export default AboutMe;