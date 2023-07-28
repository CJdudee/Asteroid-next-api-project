import React from 'react'
import getAsteroId from '@/lib/getAsteroid'
import RockObject from '@/app/components/RockObject'
import getAsteroidByDate from '@/lib/getAsteroidByDate'
import flatDateArray from '@/lib/flatDateArray'

type Params = {
    params: {
        start_date: string
        end_date: string
    }
}

export default async function AsteroidPage({params: {start_date, end_date}}: Params) {

    const asteroidData = getAsteroidByDate(start_date, end_date)

    //const numOfDays = end_date - start_date
    const asteroidByDate = await asteroidData
    
    const dateKeys = Object.keys(asteroidByDate.near_earth_objects)

    // const fullKeys = asteroidByDate.near_earth_objects.map((rock: any) => {
    //     return Object.entries(rock).map( ([key, val]) => ({date: key, value: {stringValue: val}}))
    // })

    
    const flatArray = flatDateArray(asteroidByDate)

    

    
    console.log(flatArray)
    console.log()
  return (
    <>
    <div className=" p-4">
        <ul className="p-4">
            {}
            fix please
        </ul>
    </div>
    </>
  )
}
