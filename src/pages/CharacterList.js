import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { Link } from 'react-router-dom';

export default function CharacterList() {
  const { error, loading, data } = useCharacters();

  if(loading) return <div>Loading Rick and Morty stuff...</div>
  if(error) return <div>Something went wrong...</div>

  return (
    <div className='character-list-container'>
        {data.characters.results.map(character => {
            return  <Link to={`/${character.id}`}>
                <img src={character.image}/>
                <h2>{character.name}</h2>
            </Link>
        })}
    </div>
  )
}
