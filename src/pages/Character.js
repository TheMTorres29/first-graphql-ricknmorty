import React from 'react';
import { useCharacter } from '../hooks/useCharacter';
import { useParams } from 'react-router';

export default function Character() {
    const { id } = useParams();
    const { data, loading, error} = useCharacter(id);

    // console.log(error, loading, data);
    if(loading) return <div>Loading Character Data...</div>
    if(error) return <div>Something went wrong...</div>

  return (
    <div className='character-container'>
        <img src={data.character.image}/>
        <div className='character-content'>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className='character-episode-container'>
                {data.character.episode.map(episode => {
                    return <div>
                        {episode.name} - <b>{episode.episode}</b>
                    </div>
                })}    
            </div>
        </div>
    </div>
  )
}
