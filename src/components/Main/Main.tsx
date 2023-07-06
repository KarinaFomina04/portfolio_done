import React from "react";
import s from './Main.module.scss'
import sContainer from '../Common/Styles/Container.module.scss'
import Skills from "../Skills/Skills";
import {Greeting} from "../Greeting/Greeting";


const Main: React.FC = () => {
    return (
        <div id="main" className={s.main}>
            <div className={sContainer.container}>
                <div className={s.column}>
                    <Greeting/>
                    <Skills/>
                </div>
            </div>
        </div>
    )
}

export default Main;