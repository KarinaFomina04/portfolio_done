import React from "react";
import s from './Greeting.module.scss';


export const Greeting: React.FC = () => {
    return (
        <div className={s.line}>
            <div className={s.greeting}>
                <h1>Front-End React Developer</h1>
                {/*<img src="" alt=""/>*/}
                <p>Hi, I'm Karyna Kryshneva. A passionate Front-end React Developer based in Poznan, Poland.
                    📍</p>
            </div>
            <div className={s.photo}></div>
        </div>
    )
};

