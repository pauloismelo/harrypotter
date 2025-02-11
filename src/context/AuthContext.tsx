import axios from "axios";
import { createContext, useState, useEffect, useMemo, ReactNode } from "react";

interface Character {
    id: string;
    name: string;
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    yearOfBirth: number;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: {
      wood: string;
      core: string;
      length: number;
    };
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alternateActors: string[];
    alive: boolean;
    image: string;
    favorite: string; //here I add this property to show how to add a new property in the object
}

interface AuthContextType {
    characters: Character[];
    handleFavorite: (id:string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
  }

export const AuthProvider = ({children}: AuthProviderProps) =>{
    const [characters,setCharacteres] = useState<Character[]>([]);

    useEffect(()=>{
        axios.get('https://hp-api.onrender.com/api/characters')
        .then(response => {
            //console.log(response.data);
            setCharacteres(response.data);
        })
        .catch(error => console.error(error));

    },[])

    const handleFavorite = (id:string) => {
        const newCharacters = characters.map(character => {
            if(character.id === id){
                if (character.favorite=="true"){
                return {...character, favorite: "false"};
                }else{
                    return {...character, favorite: "true"};
                }

            }
            return character;
        })
        setCharacteres(newCharacters);
    }


    //here I use useMemo to save this return in memory and avoid to render this every time
    const values = useMemo(() => ({characters, handleFavorite}), [characters]);


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}
