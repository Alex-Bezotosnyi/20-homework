import React, {useState} from "react";
import contacts from "./data";
import {checkAvatar, checkGender} from "./functions";
import contactsCSS from "./style/contacts.module.css"
import {NavLink} from "react-router-dom";

checkAvatar();
checkGender();

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className={contactsCSS.wrapper}>
            <div className={contactsCSS.wrapper__input_search}>
                <input type="text" placeholder="Пошук контактів..." onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}/>
            </div>
            <div className={contactsCSS.wrapper__contact_list}>
                {contacts.filter((value) => {
                    if (searchTerm === "") {
                        return value;
                    } else if (
                        value.lastName
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                    ) {
                        return value;
                    }
                }).map((value, key) => {
                    return (
                        <div className={contactsCSS.wrapper__contact_list_item}>
                            <NavLink className={contactsCSS.wrapper__navlink}
                                     to={`/src/pages/contacts/${value.firstName}`}>
                                <div className={contactsCSS.wrapper__contact_list_up}>
                                    <div key={key.gender} className={contactsCSS.wrapper__contact_list_picture}>
                                        {checkAvatar(value.gender)}
                                    </div>
                                    <div className={contactsCSS.wrapper__contact_list_search}>
                                        <div key={key.gender}>
                                            {checkGender(value.gender)}
                                        </div>
                                    </div>
                                </div>
                                <div key={key.firstName}>{value.firstName}</div>
                                <div key={key.lastName}>{value.lastName}</div>
                                <div className={contactsCSS.wrapper__contact_list_phone}
                                     key={key.phone}>{value.phone}</div>
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default SearchFilter;