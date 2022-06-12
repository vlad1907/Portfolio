import React from 'react';
import s from './Works.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Work from "./work/Work";


const Works = () => {
    return (
        <div className={s.workBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.works}>
                    <Work description={"some text"} title={"olalal"}/>
                    <Work description={"some text"} title={"eeee"}/>
                </div>
            </div>
        </div>
    );
};

export default Works;