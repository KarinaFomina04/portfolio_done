import React from "react";
import s from './App.module.scss'
import Header from "../Header/Header";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";


const App: React.FC = () => {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <Skills/>
        </div>
    )

}

export default App;