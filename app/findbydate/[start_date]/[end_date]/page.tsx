import React from 'react'
import getAsteroId from '@/lib/getAsteroid'
import RockObject from '@/app/components/RockObject'
import getAsteroidByDate from '@/lib/getAsteroidByDate'
import flatDateArray from '@/lib/flatDateArray'
import DateRockObject from '@/app/components/DateRockObject'

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

    <h2 className='text-3xl text-center mt-4 text-white font-bold'>Asteriods from {start_date} to {end_date}</h2>
    
        <div className="p-8 mb-4 ">
            <ul className='xl:grid grid-cols-2  gap-3'>

            {flatArray.map((r: any) => {
                return (
                    <DateRockObject {...r} rock={r} />
                    )
                })}
            
                </ul>
        </div>
    
    </>
  )
}
