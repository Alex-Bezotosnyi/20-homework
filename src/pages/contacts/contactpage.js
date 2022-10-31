import React from "react";
import {NavLink, useParams} from "react-router-dom";
import contactpageCSS from "./style/contactpage.module.css"
import {checkAvatar, checkGender} from "./functions";

const ContactPage = ({contacts}) => {
    const {firstName} = useParams();
    return (
        <div className={contactpageCSS.wrapper}>
            {
                contacts.filter((item) => item.firstName === firstName)
                    .map((item, ind) => (
                            <div className={contactpageCSS.wrapper__contact_item}>
                                <div className={contactpageCSS.wrapper__contact_up}>
                                    <div key={ind.gender} className={contactpageCSS.wrapper__contact_picture}>
                                        {checkAvatar(item.gender)}
                                    </div>
                                    <div className={contactpageCSS.wrapper__contact_search}>
                                        <div key={ind.gender}>
                                            {checkGender(item.gender)}
                                        </div>
                                    </div>
                                </div>
                                <div className={contactpageCSS.wrapper_name}>
                                    <div key={ind.firstName}>{item.firstName}</div>
                                    <div key={ind.lastName}>{item.lastName}</div>
                                </div>
                                <div className={contactpageCSS.wrapper__contact_phone}
                                     key={ind.phone}>{item.phone}</div>
                            </div>
                        )
                    )
            }
        </div>
    )
}

export default ContactPage;