import React from 'react';
import './AboutMe.css'
import {useSelector} from "react-redux";
import shlyapa from "../../../styles/icons/hat.png";
import myFace from "../../../styles/my_image/myFace3.png";
import separator from "../../../styles/icons/separatorBlack.svg";


function AboutMe () {
    const language = useSelector(state => state.Data.language)
    return (
        <>
                <div className='aboutMe-container'>
                    <div className="brief-info">
                        <div className="brief-info_1">
                            <h1>{!language ? 'Анзоров Микаэль' : 'Mikael Anzorov'}
                                <img src={shlyapa} alt="shlyapa" className='shlyapa'/>
                                <img src={myFace} alt="myFace" className='myFace'/>
                            </h1>
                            <h2>{!language ? 'Fullstack Разработчик на Python' : 'Python Fullstack Developer'}
                            </h2>
                            <p> С детства нравится математика и сложные,
                                рутинные задачи. Люблю доводить дело до идеала,
                                и получаю моральное удовлетворение от выполненной работы.
                                Высокая усидчивость. </p>
                            <p>Программирование начал изучать в 2023 году,
                                опыт работы экономистом помогает мне в программировании,
                                т.к. приходилось работать с большим объемом данных.</p>
                            <p>Вредных привычек не имею, в свободное время люблю прогулки и занимаюсь Crossfit-ом.</p>
                        </div>
                    </div>
                </div>
            <div className="title-container">
                    <img src={separator}
                         alt='img'
                         className='separator'
                    />
                </div>
            </>
            )
            }


            export default AboutMe;