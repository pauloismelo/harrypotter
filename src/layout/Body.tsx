import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Card from "../components/Card";



function Body() {

    const context = useContext(AuthContext);

    if (!context) {
        return <div>Loading...</div>; 
    }

    const {characters} = context;

    return ( 
        <main className="flex-grow">
            <div>
                <h1 className="text-3xl text-center text-yellow-600">All Characters</h1>
            </div>
            <div>
                {characters ?
                    characters.map((character) => (
                    <Card key={character.id} {...character} />
                    ))
                :
                <p>Loading...</p>
                }
            </div>
            
            
        </main>
     );
}

export default Body;