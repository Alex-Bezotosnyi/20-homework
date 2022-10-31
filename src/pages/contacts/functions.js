import contacts from "./data";
import manIcon from "./assets/man.png"
import womanIcon from "./assets/woman.png";
import anonymousIcon from "./assets/anonymous.png";
import maleIcon from "./assets/male.png";
import femaleIcon from "./assets/female.png";
import undefinedIcon from "./assets/undefined.png";
import React from "react";

function checkAvatar(gender) {
    switch (gender) {
        case "male":
            return <img src={manIcon}/>;
        case "female":
            return <img src={womanIcon}/>;
        default:
            return <img src={anonymousIcon}/>;
    }
}

function checkGender(gender) {
    switch (gender) {
        case "male":
            return <img src={maleIcon}/>;
        case "female":
            return <img src={femaleIcon}/>;
        default:
            return <img src={undefinedIcon}/>;
    }
}

export {
    checkAvatar,
    checkGender,
}