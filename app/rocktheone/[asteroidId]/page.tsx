import React from 'react'
import getAsteroId from '@/lib/getAsteroid'
import RockObject from '@/app/components/RockObject'
import SingleRock from '@/app/components/SingleRock'

type Params = {
    params: {
        asteroidId: string
    }
}

export default async function AsteroidPage({params: {asteroidId}}: Params) {

    const asteroidData = getAsteroId(asteroidId)

    const asteroid = await asteroidData
    console.log(asteroid)
  return (
    <>
     <h2 className='text-3xl text-center mt-4 text-white font-bold '>Asteroid Specific</h2>
    
    <div className='p-6  mb-4'>
    <SingleRock {...asteroid} />

    </div>
    </>
  )
}
