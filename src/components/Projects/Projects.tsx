import React from "react";
import s from './Projects.module.scss';
import sContainer from '../Common/Styles/Container.module.scss';

const Projects: React.FC = () => {
    return (
        <div className={s.projects}>
            <div className={sContainer.container  }>
                Projects
            </div>
        </div>
    )
}

export default Projects;