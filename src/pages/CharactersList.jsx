import React from 'react';
import { useCharactersHook } from '../hooks/useCharactersHook';
import './CharacterList.css';

const CharactersList = () => {

    const { error, loading, data } = useCharactersHook()

    // {loading && ( <div>loading...</div> )}
    if(loading) return <div>spinner...</div>

    if(error) return <div>Something went wrong</div>

    const mappedData = data.characters.results.map(character => (
        <div key={character.id} className='characterList'>
            <img src={character.image} alt="image" />
            <h2>{character.name}</h2>
        </div>
    ))

    return ( 
        <div className='characterLists'>
            {mappedData}
        </div>
     );
}
 
export default CharactersList;