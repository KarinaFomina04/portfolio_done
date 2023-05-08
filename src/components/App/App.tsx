import React from "react";
import s from './App.module.scss'
import Header from "../Header/Header";
import Main from "../Main/Main";


const App: React.FC = () => {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
        </div>
    )

}

export default App;