import React from 'react';
import {useSelector} from "react-redux";
import './Skills.css'
import git from '../../../styles/icons/git.svg'
import html from '../../../styles/icons/Group 12.svg'
import css from '../../../styles/icons/Group 13.svg'
import JS from '../../../styles/icons/Group.svg'
import TS from '../../../styles/icons/Group (1).svg'
import react from '../../../styles/icons/react.png'
import node from '../../../styles/icons/Group (2).svg'
import separator from '../../../styles/icons/separatorBlack.svg'
import python from '../../../styles/icons/python-icon.svg'
import docker from '../../../styles/icons/docker.png'
import sql from '../../../styles/icons/sql.png'
import django from '../../../styles/icons/django.png'


function Skills () {

    const language = useSelector(state => state.Data.language)
    const theme = useSelector(state => state.Data.theme)
    return (
        <div className='skills-container'>
            <div className="title-container">
                <h3 className={theme ? 'title' : 'title white'}>
                    {language ? 'SKILLS' : 'Профессиональные навыки'}
                </h3>
            </div>
            <div className="skills-icons">
                <span>
                    <img src={git} alt='GIT' className='skill-icon'/>
                    <p>GIT</p>
                </span>
                <span>
                    <img src={docker} alt='DOCKER' className='skill-icon'/>
                    <p>DOCKER</p>
                </span>
                <span>
                    <img src={sql} alt='SQL' className='skill-icon'/>
                    <p>SQL</p>
                </span>
                <span>
                    <img src={python} alt='python' className='skill-icon'/>
                    <p>PYTHON</p>
                </span>
                <span>
                    <img src={django} alt='django' className='skill-icon'/>
                    <p>DJANGO</p>
                </span>
                <span>
                    <img src={JS} alt='JS' className='skill-icon'/>
                    <p>JAVASCRIPT</p>
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
                    <img src={html} alt='html' className='skill-icon'/>
                    <p>HTML5</p>
                </span>
                <span>
                    <img src={css} alt='css' className='skill-icon'/>
                    <p>CSS3</p>
                </span>
            </div>
            <div className="content_1">
                <div className="container_1">
                    <p>GIT</p>
                    <div className="skills-git">50%</div>
                </div>
                <div className="container_1">
                    <p>DOCKER</p>
                    <div className="skills-docker">50%</div>
                </div>
                <div className="container_1">
                    <p>SQL</p>
                    <div className="skills-sql">50%</div>
                </div>
                <div className="container_1">
                    <p>PYTHON</p>
                    <div className="skills-python">75%</div>
                </div>
                <div className="container_1">
                    <p>DJANGO</p>
                    <div className="skills-django">75%</div>
                </div>
                <div className="container_1">
                    <p>JAVASCRIPT</p>
                    <div className="skills-js">80%</div>
                </div>
                <div className="container_1">
                    <p>TYPESCRIPT</p>
                    <div className="skills-ts">65%</div>
                </div>
                <div className="container_1">
                    <p>REACT</p>
                    <div className="skills-react">80%</div>
                </div>
                <div className="container_1">
                    <p>NODE JS</p>
                    <div className="skills-nodeJs">55%</div>
                </div>
                <div className="container_1">
                    <p>HTML5</p>
                    <div className="skills-html">75%</div>
                </div>
                <div className="container_1">
                    <p>CSS3</p>
                    <div className="skills-css">75%</div>
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


export default Skills;