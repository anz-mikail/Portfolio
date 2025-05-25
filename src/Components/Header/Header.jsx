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
    const handleClickAboutMe = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const handleClickSkills = () => {
        window.scrollTo({ top: 900, behavior: 'smooth' })
    }
    const handleClickPortfolio = () => {
        window.scrollTo({ top: 1800, behavior: 'smooth' })
    }
    const handleClickContactMe = () => {
        window.scrollTo({ top: 2500, behavior: 'smooth' })
    }
    return (
        <header className={theme? 'header': 'header white'}>
            <nav className={theme?'header-settings': 'header-settings white'}>
                <Link
                    to="/"
                    onClick={handleClickAboutMe}
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
                <p
                    onClick={handleClickAboutMe}
                    className={theme? 'Link':'Link white'}>
                    {language ? 'About me' : 'Обо мне'}
                </p>
                <p
                    onClick={handleClickSkills}
                    className={theme? 'Link':'Link white'} >
                    {language ? 'Skills' : 'Профессиональные навыки'}
                </p>
                <p
                    onClick={handleClickPortfolio}
                    className={theme? 'Link':'Link white'}>
                    {language ? 'Portfolio' : 'Мои проекты'}
                </p>
                <p
                    onClick={handleClickContactMe}
                    className={theme? 'Link':'Link white'} >
                    {language ? 'Contact Me' : 'Мои контакты'}
                </p>
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