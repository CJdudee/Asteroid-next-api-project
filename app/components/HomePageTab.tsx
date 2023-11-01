'use client'

import React, { SetStateAction, useEffect, useState } from 'react'
import RockObject from './RockObject'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

type FilterType = {
    danger: boolean | null
    min: number | null | undefined
    max: number | null | undefined

}

const initialInput = {
    danger: null, 
    min: null,
    max: null
}

export default function HomePageTab({ near_earth_objects }: any) {
    
    const [ filter, setFilter ] = useState<Boolean | null>()
    // const [ filter, setFilter ] = useState<SetStateAction<FilterType | undefined>>(initialInput)
    const searchParams = useSearchParams()

    const search = searchParams.get('dang')

    //i can set all of the search params here then filter them 

    useEffect(() => {
        if(search === 'true') {
            // setFilter((prev: any) => ({...prev, danger: true}))
             setFilter(true)
        } else if (search === 'false'){
            setFilter(false)
        } else setFilter(null) 

        
    })

    // a basic boolean to show dangerous asteroids or to show all of the asteroids 

    //i can see how many different keys are added to filter and then filter from the keys given to me 
    const filtedEarthOBJ = near_earth_objects.filter((earthObj: any) => {
        if (filter === null || !filter) return earthObj
        
        // if(filter.danger)
        //console.log(earthObj.is_potentially_hazardous_asteroid)
        // if (filter.danger) {
            
        // }
        return earthObj.is_potentially_hazardous_asteroid === filter
        // return earthObj.is_potentially_hazardous_asteroid == search
    })


    // <button onClick={() => setFilter(() => {
    //     if(filter === true) return null

    //     return true
    // })}>
    //     click
    // </button>
    


  return (
    <div className="p-2  mb-4  ">

        <div className='text-white flex justify-evenly gap-3 mb-3 text-xl mx-auto '>
            <Link className='hover:text-red-200' href={'/'}>Show all Asteroid</Link>
            <Link className='hover:text-red-200' href={'/?dang=true'}>Show dangerous Asteroid</Link>
        </div>
        
        <ul className=" 2xl:grid grid-cols-2 gap-3 ">
            {filtedEarthOBJ.map((rock: any) => (
                
                <RockObject key={rock.id} {...rock} rock={rock} />
                
            ))}
        </ul>
    </div>
  )
}
