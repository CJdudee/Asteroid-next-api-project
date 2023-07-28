import React from 'react'

export default async function getAsteroId(asteroidId: string) {
    const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${process.env.NASA_API_KEY}`)

    if (!res.ok) throw new Error('id not found')
  
    return res.json()
}
