import React from 'react'
import getAsteroId from '@/lib/getAsteroid'
import RockObject from '@/app/components/RockObject'
import getAsteroidByDate from '@/lib/getAsteroidByDate'
import flatDateArray from '@/lib/flatDateArray'
import DateRockObject from '@/app/components/DateRockObject'
import DateRockTab from '@/app/components/DateRockTab'

type Params = {
    params: {
        start_date: string
        end_date: string
    }
}

export default async function AsteroidPage({params: {start_date, end_date}}: Params) {

    const asteroidData = getAsteroidByDate(start_date, end_date)

    
    const asteroidByDate = await asteroidData

    //console.log(asteroidByDate)

    
    

    
    const flatArray = flatDateArray(asteroidByDate.near_earth_objects)

    

    
    //console.log(flatArray.slice(0, 5))
    // console.log(asteroidByDate.near_earth_objects)
  return (
    <>

    <DateRockTab flatArray={flatArray} start_date={start_date} end_date={end_date} />
    
    </>
  )
}
