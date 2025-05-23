import React from 'react';
import {useSelector} from "react-redux";
import './Skills.css'
import git from '../../../styles/icons/git.svg'
import html from '../../../styles/icons/Group 12.svg'
import css from '../../../styles/icons/Group 13.svg'
import JS from '../../../styles/icons/Group.svg'
import TS from '../../../styles/icons/Group (1).svg'
import react from '../../../styles/icons/Group 14.svg'
import node from '../../../styles/icons/Group (2).svg'
import MysQl from '../../../styles/icons/Vector.svg'
import separator from '../../../styles/icons/separatorBlack.svg'
import python from '../../../styles/icons/python-icon.svg'


function Skills () {

    const language = useSelector(state => state.Data.language)
    const theme = useSelector(state => state.Data.theme)
    return (
        <div className='skills-container'>
            <div className="title-container">
                <img src={separator}
                     alt = 'img'
                    className='separator'/>
                <h2 className={theme? 'title': 'title white'}>
                    {language ? 'SKILLS' : 'Профессиональные навыки'}
                </h2>
            </div>
            <div className="skills-icons">
                <span>
                    <img src={git} alt='GIT' className='skill-icon'/>
                    <p>GIT</p>
                </span>
                <span>
                    <img src={python} alt='python' className='skill-icon'/>
                    <p>PYTHON</p>
                </span>
                <span>
                    <img src={html} alt='html' className='skill-icon'/>
                    <p>HTML5</p>
                </span>
                <span>
                    <img src={JS} alt='JS' className='skill-icon'/>
                    <p>JAVASCRIPT</p>
                </span>
                <span>
                    <img src={css} alt='css' className='skill-icon'/>
                    <p>CSS3</p>
                </span>
                <span>
                    <img src={TS} alt='TS' className='skill-icon'/>
                    <p>TYPESCRIPT</p>
                </span>
                <span>
                    <img src={react} alt='react' className='skill-icon'/>
                    <p>REACT</p>
                </span>
                <span>
                    <img src={node} alt='node' className='skill-icon'/>
                    <p>NODEJS</p>
                </span>
                <span>
                    <img src={MysQl} alt='MysQl' className='skill-icon'/>
                    <p>MYSQL</p>
                </span>
            </div>
            <div className="content_1">
                <div className="container_1">
                    <p>Python</p>
                    <div className="skills python">60%</div>
                </div>
                <div className="container_1">
                    <p>Django</p>
                    <div className="skills django">60%</div>
                </div>
                <div className="container_1">
                    <p>PostgreSQL</p>
                    <div className="skills postgresql">70%</div>
                </div>
                <div className="container_1">
                    <p>Docker</p>
                    <div className="skills docker">80%</div>
                </div>
                <div className="container_1">
                    <p>HTML</p>
                    <div className="skills html">70%</div>
                </div>
                <div className="container_1">
                    <p>CSS</p>
                    <div className="skills css">80%</div>
                </div>
                <div className="container_1">
                    <p>JavaScript</p>
                    <div className="skills js">65%</div>
                </div>
                <div className="container_1">
                    <p>Excel</p>
                    <div className="skills excel">80%</div>
                </div>
            </div>
        </div>
    )
}


export default Skills;