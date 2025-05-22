import React from 'react';
import './AboutMe.css'


function AboutMe () {
    return (
        <>
            <div className="brief-info">
                <div className="brief-info_1">
                    <h3>Анзоров Микаэль</h3>
                    <h3>Fullstack Разработчик на Python</h3>
                </div>
                <div className="brief-info_2">
                    <img className="photo" alt="my face" width="300"/>
                </div>
            </div>

            <h2>Образование</h2>
            <div className="content_1">
                <div className="content_studies">
                    <span className="studies_1">
                        <p>Образование: Высшее</p>
                        <p>Форма обучения: очная</p>
                        <p>Год окончания: 2009</p>
                    </span>
                    <span className="studies_2">
                        <h3>Международная Академия Бизнеса и Управления (МАБиУ) г. Москва</h3>
                        <p>Факультет: Менеджмент организации</p>
                        <p>Специальность: Административный менеджмент</p>
                    </span>
                </div>
            </div>
            <div className="content_1">
                <div className="content_studies">
                    <span className="studies_1">
                        <p>Повышение квалификации</p>
                        <p>Форма обучения: онлайн</p>
                        <p>Год окончания: 2025</p>
                    </span>
                    <span className="studies_2">
                        <h3>Skillfactory</h3>
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
            <h2>Контакты</h2>
            <div className="content_1">
                <ul className="self_info">
                    <li>Телефон: 8(938)024-04-66</li>
                    <li>e-mail: anz.mikail@mail.ru</li>
                </ul>
            </div>
        </>
    )
}


export default AboutMe;