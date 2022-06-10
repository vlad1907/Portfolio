import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.title}>
                <span>Hi There</span>
                <h1>I am Vladislav V</h1>
                <p>Frontend Developer.</p>
            </div>
            <div className={s.photo}></div>
        </div>
    );
};

export default Main;