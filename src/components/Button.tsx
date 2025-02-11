import { FunctionComponent } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
    id:string;
    text: string;
    type: "button" | "submit" | "reset";
    iconButton?: any;
    handleclick: (id:string) => void;
}

const Button: FunctionComponent<ButtonProps> = ({id, text, type, iconButton, handleclick}) => {

    const handleclickDetails = (idx:string) => {
        handleclick(idx);
    }

    let stylesButton : string;
    //here I enjoyed the iconButton Props to create differente styles
    if (iconButton=="faSearch") {
        stylesButton = "bg-yellow-600 text-white rounded border border-yellow-700 px-2 hover:bg-yellow-700 cursor-pointer";
    }else if(iconButton=="faHeart") {
        stylesButton = "bg-black text-white rounded border border-gray-900 px-2 hover:bg-gray-700 cursor-pointer";
    }

    return (
        <button type={type} className={stylesButton} onClick={()=>{handleclickDetails(id)}}>
            {iconButton === "faSearch" && <FontAwesomeIcon className="mr-2" icon={faSearch}/> }
            {iconButton === "faHeart" && <FontAwesomeIcon className="mr-2" icon={faHeart}/> }
            {text}
        </button>
    );
}

export default Button;