import React from "react";
import s from './Nav.module.scss'

const Nav: React.FC = () => {
    return (
        <div className={s.nav}>
            <a href="src/componentst/components/Nav">Home</a>
            <a href="src/componentst/components/Nav">Skills</a>
            <a href="src/componentst/components/Nav">Projects</a>
            <a href="src/componentst/components/Nav">Contact</a>
        </div>
    )
}

export default Nav;