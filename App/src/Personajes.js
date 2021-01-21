import React,  {useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Personajes() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [characters, setCharacters ] = useState([]);
    const [url, setUrl ] = useState('https://rickandmortyapi.com/api/character/');

    const fetchItems = async () => {
        const data = await fetch(url);
        const result = await data.json();
        console.log(result.results);
        setCharacters(result.results);
        setUrl(result.info.next);
    }

  return (
    <div>
        {characters.map(char => (
            <div key={char.id}>
                    <h1 className='charName'>
                        <Link to={`/shop/${char.id}`}>{char.name}</Link>
                    </h1>
            </div>
        ))}
        <button onClick={fetchItems}>Load More</button>
    </div>
  );
}

export default Personajes;