import React from 'react';
import './Footer.css'
import {useSelector} from "react-redux";
import { BiLogoGithub, BiLogoTelegram,  BiLogoVk, BiLogoWhatsapp } from "react-icons/bi";
import { HiMiniChevronDoubleUp } from "react-icons/hi2";


function Footer () {

    const language = useSelector(state => state.Data.language)
    const theme = useSelector(state => state.Data.theme)

    const handleClickTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <footer className={theme? 'footer': 'footer white'}>
            <div onClick={handleClickTop} className='footer-block1'>
                <HiMiniChevronDoubleUp  className='top-icon'/>
                <p>{language? 'BACK TO TOP':'Вернуться в начало'}</p>
            </div>
            <div>
                <BiLogoGithub />
                <BiLogoTelegram />
                <BiLogoVk />
                <BiLogoWhatsapp />
            </div>
            <p>@2025 Mikael Anzorov </p>

        </footer>
    )
}


export default Footer;