import React from 'react';
import { BiLogoGithub, BiLogoTelegram, BiLogoWhatsapp } from "react-icons/bi";
import './ContactMe.css'
import {useSelector} from "react-redux";


function ContactMe () {
    const theme = useSelector(state => state.Data.theme)
    return (
        <div className={theme? "contactMe": "contactMe white" }>
            <h2>Контакты</h2>
            <div>
                <ul className="self_info">
                    <li>Телефон: 8(938)024-04-66 <BiLogoWhatsapp/></li>
                    <li>e-mail: anz.mikail@mail.ru</li>
                    <li>GitHub: <a href='https://github.com/anz-mikail'><BiLogoGithub/></a></li>
                    <li>Telegram: <a href='https://t.me/Mikael_Anz'><BiLogoTelegram/></a></li>
                </ul>
            </div>
        </div>
    )
}


export default ContactMe;