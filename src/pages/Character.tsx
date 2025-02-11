//In this component I could to use the endpoint [https://hp-api.onrender.com/api/character/:id]to get the specific character, but I preferred to use the context to show how to share data between components.


import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface idParams {
    id: string;
}

function Character() {

    const {id} = useParams<idParams>();
    const handleBack = () => {
        window.history.back();
        //here I could to used the navigate from react-router-dom, but I decided to use the window.history.back to show another possibility
    }

    const context = useContext(AuthContext);

    if (!context) {
        return <div>Loading...</div>;
    }

    const { characters } = context;

    if (!id) {
        return <div>No ID provided!</div>; // Caso o id não exista na URL
    }

    return ( 
    <div className="flex-grow">
        <div className="ml-2 pl-1 cursor-pointer" onClick={handleBack}>
            <FontAwesomeIcon className="text-yellow-600 mr-2" icon={faArrowLeft} title="Character Favorited" />Back
        </div>
        {characters.filter(character => character.id === id).map((character) => (
            
            <div key={character.id} className="grid grid-cols-3 gap-4 m-2 p-1 rounded border border-gray-400 shadow-lg p-4">
                <div>
                    <img src={character.image} />
                </div>
                <div>
                    <h1>
                        {character.favorite=="true" && <FontAwesomeIcon className="text-red-600 ml-2 mr-2" icon={faHeart} title="Character Favorited" />}
                        {character.name}
                    </h1>
                    <p className="text-sm text-gray-400">
                        <span className="text-black">Actor: </span>{character.actor}
                    </p>
                    <p className="text-sm text-gray-400">
                        <span className="text-black">Specie: </span>{character.species}
                    </p>
                    <p className="text-sm text-gray-400">
                        <span className="text-black">Gender: </span>{character.gender}
                    </p>
                    <p className="text-sm text-gray-400">
                        <span className="text-black">House: </span>{character.house}
                    </p>
                    <p className="text-sm text-gray-400">
                        <span className="text-black">Birth: </span>{character.dateOfBirth}
                    </p>
                    <p className="text-sm text-gray-400">
                        <span className="text-black">Year of Birth: </span>{character.yearOfBirth}
                    </p>
                    <p className="text-sm text-gray-400">
                        <span className="text-black">Wizard: </span>{character.wizard==true ? "Yes" : "No"}
                    </p>
                    <p className="text-sm text-gray-400">
                        <span className="text-black">Ancestry: </span>{character.ancestry}
                    </p>
                </div>
                <div>
                    
                    <p className="text-sm text-gray-400">
                        <span className="text-black">Eye Color: </span>{character.eyeColour}
                    </p>
                    <p className="text-sm text-gray-400">
                        <span className="text-black">Hair Color: </span>{character.hairColour}
                    </p>
                    <p className="text-sm text-gray-400">
                        <span className="text-black">Patronus: </span>{character.patronus}
                    </p>
                    <p className="text-sm text-gray-400">
                        <span className="text-black">Hogwarts Student: </span>{character.hogwartsStudent==true ? "Yes" : "No"}
                    </p>
                    <p className="text-sm text-gray-400">
                        <span className="text-black">Hogwarts Staff: </span>{character.hogwartsStaff==true ? "Yes" : "No"}
                    </p>
                    <div className="border rounded border-gray-500">
                        <p className="text-sm text-gray-400">
                            <span className="text-black">Wand: </span><br/>
                            <span className="pl-4 text-black">Wood: </span>{character.wand.wood}<br/>
                            <span className="pl-4 text-black">Core: </span>{character.wand.core}<br/>
                            <span className="pl-4 text-black">Length: </span>{character.wand.length}<br/>
                        </p>

                    </div>

                </div>
                
                
            </div>
        ))}
    </div>
     );
}

export default Character;