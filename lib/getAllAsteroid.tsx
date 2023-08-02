import React from 'react'

export default async function getAllAsteroid() {
    const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.NASA_API_KEY}`)

    if (!res.ok) {

        throw new Error('fail to get data')
    }

    return res.json()
}
