import { FunctionComponent, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface CharacterProps {
    id: string;
    name: string;
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    favorite: string;
}

const Card:FunctionComponent<CharacterProps> = ({id,name,species, gender, house, dateOfBirth, favorite}) => {

    const navigate = useNavigate();
    const context = useContext(AuthContext);

    if (!context) {
        return <div>Loading...</div>;
    }

    const { handleFavorite } = context;

    const handleDetails = (id:string) => {
        //console.log(id);
        navigate(`/character/${id}`);
    }

    const handleClickFavorite = (id:string) => {
        handleFavorite(id);
    }

    return ( 
        <div className="flex m-2 p-1 rounded border border-gray-400 shadow-lg p-4" key={id}>
            <div className="w-1/2">
                <h4 className="">{name} 
                    {favorite=="true" && <FontAwesomeIcon className="text-red-600 ml-2" icon={faHeart} />}
                </h4>
                <p className="text-sm text-gray-400">
                    <span className="text-black">Specie: </span>{species}
                </p>
                <p className="text-sm text-gray-400">
                    <span className="text-black">Gender: </span>{gender}
                </p>
                <p className="text-sm text-gray-400">
                    <span className="text-black">House: </span>{house}
                </p>
            </div>
            <div className="w-1/2 p-4">
                <p className="text-sm text-gray-400 text-right">
                    <span className="text-black">Birth: </span>{dateOfBirth}
                </p>
                <div className="flex gap-2 mt-4 ml-auto justify-end">
                    <Button id={id} text="Details" type="button" handleclick={()=>{handleDetails(id)}} iconButton="faSearch" />
                    <Button id={id} text="Favorite" type="button" handleclick={()=>handleClickFavorite(id)} iconButton="faHeart" />


                    
                </div>
                
            </div>
            
        </div>
     );
}


export default Card;