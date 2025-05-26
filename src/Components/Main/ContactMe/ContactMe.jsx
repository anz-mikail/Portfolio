import React from 'react';
import './ContactMe.css'
import {useSelector} from "react-redux";
import separator from "../../../styles/icons/separatorBlack.svg";


function ContactMe () {
    const language = useSelector(state => state.Data.language)
    const theme = useSelector(state => state.Data.theme)
    return (
        <div>
            <div className="title-container">
                <h3 className={theme ? 'title' : 'title white'}>
                    {!language ? 'Контакты' : 'Contacts'}
                </h3>
            </div>
            <div>
                <ul className="self_info">
                    <li>{!language ? "Телефон" : "Phone"}: 8(938)024-04-66</li>
                    <li>e-mail: anz.mikail@mail.ru</li>
                    <li>GitHub: github.com/anz-mikail</li>
                    <li>Telegram: @Mikael_Anz</li>
                </ul>
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


                export default ContactMe;