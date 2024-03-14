'use client'

import React, { SetStateAction, useEffect, useRef, useState } from 'react'
import RockObject from './RockObject'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Select from 'react-select'
import { BiDownArrowAlt } from 'react-icons/bi'
import { filterOptions, selectStyles } from '@/util/config'
import AsteroidFilter from './AsteroidFilter'
import { filteredAsteroids } from '@/util/helpers'

// type FilterType = {
//     danger: boolean | null
//     min: number | null | undefined
//     max: number | null | undefined

// }

const initialInput = {
    danger: null, 
    min: null,
    max: null
}

export default function HomePageTab({ near_earth_objects }: any) {
    
    const [ filter, setFilter ] = useState(initialInput)
    // const [ filter, setFilter ] = useState<SetStateAction<FilterType | undefined>>(initialInput)


    const [openFilter, setOpenFilter ] = useState(false)

    const filtedEarthOBJ = filteredAsteroids(near_earth_objects, filter)


  return (
    <div className=" p-4  sm:p-2  mb-4">

        <AsteroidFilter setFilter={setFilter} setOpenFilter={setOpenFilter}
         openFilter={openFilter} filter={filter} />
        
        <ul className="  grid grid-cols-2 gap-3 items-start ">
            {filtedEarthOBJ.map((rock: any) => (
                
                <RockObject key={rock.id} {...rock} rock={rock} />
                
            ))}
        </ul>
    </div>
  )
}
