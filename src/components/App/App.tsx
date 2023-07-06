import React from "react";
import s from './App.module.scss'
import Header from "../Header/Header";
import Main from "../Main/Main";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import {About} from "../About/About";
import {ScrollToTopOnReload} from "../ScrollToTopOnReload/ScrollToTopOnReload";


const App: React.FC = () => {

    return (
        <div className={s.App}>
            <ScrollToTopOnReload/>
            <Header/>
            <Main/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )

}

export default App;