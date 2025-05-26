import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {BiLogoGithub, BiLogoTelegram, BiSolidHome} from "react-icons/bi";
import { HiMiniMoon, HiMiniSun } from "react-icons/hi2";
import './Header.css'
import {ChangeLanguage, ChangeMenuActive, ChangeTheme} from "../../store/slice";


function Header () {

    const dispatch = useDispatch()
    const language = useSelector(state => state.Data.language)
    const menuActive = useSelector(state => state.Data.menuActive)
    const theme = useSelector(state => state.Data.theme)
    const navigate = useNavigate();

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
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const handleClickSkills = () => {
        navigate('/');
        window.scrollTo({ top: 630, behavior: 'smooth' })
    }
    const handleClickPortfolio = () => {
        navigate('/');
        window.scrollTo({ top: 1500, behavior: 'smooth' })
    }
    const handleClickContactMe = () => {
        navigate('/');
        window.scrollTo({ top: 2200, behavior: 'smooth' })
    }
    return (
        <header className={theme? 'header': 'header white'}>
            <nav className={theme ? 'header-settings' : 'header-settings white'}>
                <a
                    className={theme ? 'LinkHome' : 'LinkHome white'}
                    href='https://github.com/anz-mikail'
                    rel="noreferrer"
                    target='_blank'><BiLogoGithub className='header-moon'/>
                </a>
                <a
                    className={theme ? 'LinkHome' : 'LinkHome white'}
                    href='https://t.me/Mikael_Anz'
                    rel="noreferrer"
                    target='_blank'><BiLogoTelegram className='header-moon'/>
                </a>
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
                    className={theme ? 'Link' : 'Link white'}>
                    {language ? 'About me' : 'Обо мне'}
                </p>
                <p
                    onClick={handleClickSkills}
                    className={theme ? 'Link' : 'Link white'}>
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