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
    <SingleRock {...asteroid} />
  )
}
