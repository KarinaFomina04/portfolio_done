import React from "react";
import s from './Skills.module.scss';
import sContainer from '../Common/Styles/Container.module.scss';

const Skills: React.FC = () => {
    return (
        <div className={s.skills}>
            <h2 className={sContainer.container}>Tech scills</h2>
        </div>
    )
}

export default Skills;