import React from "react";
import s from './Greeting.module.scss';


export const Greeting: React.FC = () => {
    return (
        <div className={s.line}>
            <div className={s.greeting}>
                <h1>Front-End React Developer</h1>
                {/*<img src="" alt=""/>*/}
                <p>Hi, I'm Karyna Kryshneva. A passionate Front-end React Developer based in Poznan, Poland.
                    📍</p>
                <span>
                    <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/karina-kryshneva-192a4a221/">
                        <i className="fa-brands fa-linkedin">
                            <img src="/linkedin.svg" />
                        </i>
                    </a>
                    <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/karina-kryshneva-192a4a221/">
                        <i className="fa-brands fa-linkedin">
                            <img src="/linkedin.svg" />
                        </i>
                    </a>
                </span>
            </div>
            <div className={s.photo}></div>
        </div>
    )
};

