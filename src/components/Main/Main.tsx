import React from "react";
import s from './Main.module.scss'
import sContainer from '../Common/Styles/Container.module.scss'
import html5 from "../Skills/icons/html5.svg";
import css3 from "../Skills/icons/css3.svg";
import js from "../Skills/icons/js.svg";
import react from "../Skills/icons/react.svg";
import scss from "../Skills/icons/scss.svg";


const Main: React.FC = () => {
    return (
        <div className={s.main}>
            <div className={sContainer.container}>
                <div className={s.column}>
                    <div className={s.line}>
                        <div className={s.greetings}>
                            <h1>Front-End React Developer</h1>
                            <img src="" alt=""/>
                            <p>Hi, I'm Karyna Kryshneva. A passionate Front-end React Developer based in Poznan, Poland. 📍</p>
                        </div>
                        <div className={s.photo}></div>
                    </div>
                    <div>
                        <h2 >Tech Stack</h2>
                        <ul className={s.complex_list}>
                            <li>
                                <img src={html5} alt="HTML5" width={40}/>
                            </li>
                            <li>
                                <img src={css3} alt="CSS3" width={40}/>
                            </li>
                            <li>
                                <img src={js} alt="JS" width={40}/>
                            </li>
                            <li>
                                <img src={react} alt="REACT" width={40}/>
                            </li>
                            <li>
                                <img src={scss} alt="SCSS" width={40}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;