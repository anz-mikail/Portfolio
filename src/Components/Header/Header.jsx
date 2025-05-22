import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { BiSolidHome } from "react-icons/bi";
import { HiMiniMoon, HiMiniSun } from "react-icons/hi2";
import './Header.css'
import {ChangeLanguage, ChangeMenuActive, ChangeTheme} from "../../store/slice";


function Header () {
    const dispatch = useDispatch()
    const language = useSelector(state => state.Data.language)
    const menuActive = useSelector(state => state.Data.menuActive)
    const theme = useSelector(state => state.Data.theme)

    const handleChangeMenuActive = () => {
        dispatch(ChangeMenuActive())
    }
    const handleChangeLanguage = () => {
        dispatch(ChangeLanguage())
    }
    const handleChangeTheme = () => {
        dispatch(ChangeTheme())
    }
    return (
        <header className={theme? 'header': 'header white'}>
            <nav className={theme?'header-settings': 'header-settings white'}>
                <Link to="/"
                      className={theme ? 'LinkHome' : 'LinkHome white'}>
                    <BiSolidHome className='header-moon'/>
                </Link>
                <HiMiniMoon
                    className='header-moon'
                    style={theme ? {display: 'none'} : {}}
                    onClick={handleChangeTheme}/>
                <HiMiniSun
                    className='header-moon'
                    style={!theme ? {display: 'none'} : {}}
                    onClick={handleChangeTheme}/>
                <button
                    className='ChangeLanguage-btn'
                    onClick={handleChangeLanguage}
                >{!language ? 'en' : 'ru'}
                </button>
            </nav>
            <nav className={menuActive ? 'navbar' : 'navbar active'}
                style={!theme ? {background: 'var(--white)'} : {background: 'var(--black)'}}>
                <Link to="/about-me"
                      className={theme? 'Link':'Link white'}>
                    {language ? 'About me' : 'Обо мне'}
                </Link>
                <Link to="/skills"
                      className={theme? 'Link':'Link white'} >
                    {language ? 'Skills' : 'Профессиональные навыки'}
                </Link>
                <Link to="/portfolio"
                      className={theme? 'Link':'Link white'}>
                    {language ? 'Portfolio' : 'Мои проекты'}
                </Link>
                <Link to="/contact-me"
                      className={theme? 'Link':'Link white'} >
                    {language ? 'Contact Me' : 'Мои контакты'}
                </Link>
            </nav>
            <button
                className={menuActive ? 'burger-btn' : 'burger-btn active'}
                onClick={handleChangeMenuActive}
                style={!theme?{background:'var(--white)'}:{background:'var(--black)'}}
            ><span></span><span></span><span></span>
            </button>
        </header>
    )
}


export default Header;