import React,  {useState, useEffect } from 'react';
import './App.css';


function CharDetail({match}) {
    useEffect(() => {
        fetchChar();
        console.log(match)
    }, []);

    const [character, setCharacter] = useState({});

    const fetchChar = async () => {
        const fetchChar = await fetch(`https://rickandmortyapi.com/api/character/${match.params.urlId}`);
        const character = await fetchChar.json();
        setCharacter(character);
        console.log(character)
    };


    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image}></img>
            <h4>Gender: {character.gender}</h4>
            <h4>Status: {character.status}</h4>
            <h4>Species: {character.species}</h4>
            <h4>Type: {(character.type == '') ? ('No type assigned') : (character.type)}</h4>
        </div>
    );
}

export default CharDetail;