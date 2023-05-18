import React from "react";
import s from './Skills.module.scss';
import sContainer from '../Common/Styles/Container.module.scss';
import html5 from "./icons/html5.svg";
import css3 from "./icons/css3.svg";
import js from "./icons/js.svg";
import react from "./icons/react.svg";
import scss from "./icons/scss.svg";

const Skills: React.FC = () => {
    return (
        <div className={s.skills}>
            <div className={sContainer.container}>
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
    )
}

export default Skills;