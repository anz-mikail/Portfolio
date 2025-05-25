import React from 'react';
import './AboutMe.css'
import {useSelector} from "react-redux";
import {BiLogoGithub, BiLogoTelegram} from "react-icons/bi";
import shlyapa from "../../../styles/icons/hat.png";
import separator from "../../../styles/icons/separatorBlack.svg";


function AboutMe () {
    const language = useSelector(state => state.Data.language)
    const theme = useSelector(state => state.Data.theme)
    return (
        <div className='aboutMe-container'>
            <div className="brief-info">
                <div className="brief-info_1">
                    <h1>{!language ? 'Анзоров Микаэль' : 'Mikael Anzorov'}
                        <img src={shlyapa} alt="shlyapa" className='shlyapa'/>
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
                    <div className="link-icon-container">
                        <a
                            className={theme ? "link-icon" : "link-icon white"}
                            href='https://github.com/anz-mikail'
                            target='_blank'><BiLogoGithub/>
                        </a>
                        <a
                            className={theme ? "link-icon" : "link-icon white"}
                            href='https://t.me/Mikael_Anz'
                            target='_blank'><BiLogoTelegram/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="title-container">
                <img src={separator}
                     alt='img'
                     className='separator'
                />
            </div>
        </div>
    )
}


export default AboutMe;