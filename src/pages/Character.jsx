import React from 'react';
import './Character.css'
import { useCharacterHook } from '../hooks/useCharacterHook';
import { useParams } from 'react-router';

const Character = () => {
    const {id} = useParams()

    const { data, loading, error } = useCharacterHook(id)

    console.log({ error, loading, data });

    if(error) return <div>something went wrong</div>

    if(loading) return <div>loading...</div>

    const mappedCharacterEpisodes = data.character.episode.map(episode => (
        <div key={episode.name}>
            {episode.name} - <b>{episode.episode}</b>
        </div>
    ))

    return ( 
        <div className="character">
            {/* <button className="characterBackButton">Home Page</button> */}
            <div>
                <img src={data.character.image} alt="character" />
            </div>
            <div className="characterContent">
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>

                <div className="characterEpisodes">
                    {mappedCharacterEpisodes}
                </div>
            </div>
        </div>
     );
}
 
export default Character;