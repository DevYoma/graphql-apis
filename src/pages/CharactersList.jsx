import React from 'react';
import { Link } from 'react-router-dom';
import { useCharactersHook } from '../hooks/useCharactersHook';
import './CharacterList.css';

const CharactersList = () => {

    const { error, loading, data } = useCharactersHook()

    // {loading && ( <div>loading...</div> )}
    if(loading) return <div>loading...</div>

    if(error) return <div>Something went wrong</div>

    const mappedData = data.characters.results.map(character => (
        <Link to={`/${character.id}`} key={character.id} className='characterList'>
            <img src={character.image} alt="image" />
            <h2>{character.name}</h2>
        </Link>
    ))

    return ( 
        <div className='characterLists'>
            {mappedData}
        </div>
     );
}
 
export default CharactersList;