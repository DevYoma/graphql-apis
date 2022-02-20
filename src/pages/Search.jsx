import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client'

const GET_CHARACTER_LOCATIONS = gql`
    query GetCharacterLocations($name: String!) {
	characters(filter:{
    name: $name
  }){
    results{
      location{
        name
      }
    }
  }
}
`

const Search = () => {

    const [name, setName] = useState("");
    

    // useLazy query returns an array
    const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    })

    console.log({
        called,
        data,
        loading,
        error
    });
  

    return ( 
        <div>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => getLocations()}>Search</button>

            { loading && <div>loading...</div> }

            { error && <div>OOoopsss something went wrong</div> }

            {data && (
                <ul>
                    {data.characters.results.map(character => (
                        <li key={character.location.name}>{character.location.name}</li>
                    ))}
                </ul>
            )}

        </div>
     );
}
 
export default Search;