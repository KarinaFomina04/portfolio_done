import React from "react";
import s from './Main.module.scss'
import sContainer from '../Common/Styles/Container.module.scss'

const Main: React.FC = () => {
    return (
        <div className={s.main}>
            <div className={sContainer.container}>
                <div className={s.greetings}>
                    <h1>Front-End React Developer</h1>
                    <img src="" alt=""/>
                    <p>Hi, I'm Karyna Kryshneva. A passionate Front-end React Developer based in Poznan, Poland. 📍</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    )
}

export default Main;