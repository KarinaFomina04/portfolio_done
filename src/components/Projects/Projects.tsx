import React from "react";
import s from './Projects.module.scss';
import sContainer from '../Common/Styles/Container.module.scss';

const Projects: React.FC = () => {
    return (
        <div className={s.projects}>
            <div id="project" className={sContainer.container  }>
                My projects
            </div>
        </div>
    )
}

export default Projects;