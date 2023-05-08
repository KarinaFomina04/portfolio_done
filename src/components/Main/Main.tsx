import React from "react";
import s from './Main.module.scss'
import sContainer from '../Common/Styles/Container.module.scss'

const Main: React.FC = () => {
    return (
        <div className={s.main}>
            <div className={sContainer.container}>
                <div className={s.greetings}>
                    <span>Hi there</span>
                    <h1>I'm Karina</h1>
                    <p>A Frontend developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    )
}

export default Main;