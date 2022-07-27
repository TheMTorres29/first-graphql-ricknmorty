import React from 'react';
import { useMySmashData } from '../hooks/useMySmash';

export default function TestSmash() {
    const { error, loading, data } = useMySmashData();

    console.log( error, loading, data);
    
    if(loading) return <div>Loading Your Smash Data...</div>
    if(error) return <div>Error! Could not get data...</div>
 
    return (
    <div className='my-smash-container'>
        

    </div>
  )
}
