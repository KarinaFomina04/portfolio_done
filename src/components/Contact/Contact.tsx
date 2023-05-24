import React from "react";
import s from './Contact.module.scss'
import sContainer from "../Common/Styles/Container.module.scss";

const Contact: React.FC = () => {
    return (
        <div className={s.contact}>
            <div className={sContainer.container  }>
                Contact
            </div>
        </div>
    )
}

export default Contact;