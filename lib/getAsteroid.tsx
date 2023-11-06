import React from 'react'

export default async function getAsteroId(asteroidId: string) {

    const APIKEY = process.env.NASA_API_KEY || 'DEMO_KEY'

    const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${APIKEY}`)

    if (!res.ok) return null
  
    return res.json()
}
