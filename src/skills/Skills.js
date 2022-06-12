import React from 'react';
import s from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS"} description={"Js description"}/>
                    <Skill title={"CSS"} description={"CSS description"}/>
                    <Skill title={"React"} description={"React description"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;