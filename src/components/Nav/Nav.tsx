import React from "react";
import s from './Nav.module.scss'

const Nav: React.FC = () => {
    return (
        <div className={s.nav}>
            <a href="#main">Номе</a>
            <a href="#about">About</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    )
}
export default Nav;