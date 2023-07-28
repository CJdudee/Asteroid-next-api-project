import React from 'react'

export default async function getAsteroidByDate(start_date: string, end_date: string) {
    const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${process.env.NASA_API_KEY}`)

    if (!res.ok) throw new Error('fetch didnt work')

    return res.json()
}