import React from 'react'

export default async function getAllAsteroid() {

    const APIKEY = process.env.NASA_API_KEY || 'DEMO_KEY'
    const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${APIKEY}`)

    if (!res.ok) {

        throw new Error('fail to get data')
    }

    return res.json()
}
