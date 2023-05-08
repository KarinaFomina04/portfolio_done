import React from "react";
import s from './Header.module.scss'
import Nav from "../Nav/Nav";

const Header: React.FC = () => {
    return (
        <div className={s.header}>
            <h3 className={s.name}>Karyna Kryshneva</h3>
            <Nav/>
        </div>

    )
}

export default Header;