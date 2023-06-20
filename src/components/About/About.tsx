import React from "react";
import s from './About.module.scss'
import sContainer from '../Common/Styles/Container.module.scss'


export const About: React.FC = () => {
    return (
        <div className={s.about}>
            <div className={sContainer.container}>
                About
            </div>
        </div>
    )
}

