import React from "react";
import s from './About.module.scss'
import sContainer from '../Common/Styles/Container.module.scss'


export const About: React.FC = () => {
    return (
        <div className={sContainer.container} >
            <div id="about" className={s.about}>
                <h1>A dedicated Front-end Developer based in Poznan, Poland 🚩</h1>
                <h2 className={s.description}>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML,
                    CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining
                    responsive websites that offer a smooth user experience. My expertise lies in crafting
                    dynamic, engaging interfaces through writing clean and optimized code and utilizing
                    cutting-edge development tools and techniques. I am also a team player who thrives in
                    collaborating with cross-functional teams to produce outstanding web applications.</h2>
            </div>
        </div>
    )
}

