import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!){
    characters(filter: { name: $name}) {
        results {
            location {
                name
            }
        }
    }
}
`

export default function Search() {
    const [name, setName] = useState("");

    const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    });

    console.log({ called, loading, error, data})

  return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={() => getLocations()}>Search</button>
    </div>
  )
}
