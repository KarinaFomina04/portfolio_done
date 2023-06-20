import React from "react";
import s from './Nav.module.scss'

const Nav: React.FC = () => {
    return (
        <div className={s.nav}>
            <a href="src/componentst/components/Main">Номе</a>
            <a href="src/componentst/components/About">About</a>
            <a href="src/componentst/components/Nav">Projects</a>
            <a href="src/componentst/components/Nav">Contact</a>
        </div>
    )
}
export default Nav;