'use client'

import { useSearchParams } from 'next/navigation'
import React, { SetStateAction, useEffect, useRef, useState } from 'react'
import DateRockObject from './DateRockObject'
import Link from 'next/link'
import Select from 'react-select'
import {BiDownArrowAlt} from 'react-icons/bi'
import { selectStyles } from '@/util/config'
import AsteroidFilter from './AsteroidFilter'
import { filteredAsteroids } from '@/util/helpers'

const initialInput = {
    danger: null, 
    min: null,
    max: null
}

type FilterType = {
    danger: boolean | null
    min: number | null | undefined
    max: number | null | undefined

}

const options = [
    {value: true, label: 'Show Dangerous Asteroid'},
    {value: false, label: 'Show Safe Asteroid'},
    {value: null, label: 'Show All Asteroid'}
]

export default function DateRockTab({ flatArray, start_date, end_date }:any) {

    // const [ filter, setFilter ] = useState<Boolean | null>()
    const [ filter, setFilter ] = useState(initialInput)

    const [openFilter, setOpenFilter ] = useState(false)

    const filterRef = useRef<HTMLDivElement>(null); 


    useEffect(() => {
        const handler = (e: any) => {
  
            if (!filterRef || !filterRef.current || !filterRef.current.contains(e.target)) {
            setOpenFilter(false)
            }
  
        }
        
        document.addEventListener('mousedown', handler )
  
        return () => {
          document.removeEventListener('mousedown', handler)
        }
  
  
      })

    
    
    // const flatEarthOBJ = flatArray.filter((earthObj: any) => {
    //     if (!filter || !filter.danger && !filter.min && !filter.max === null) return earthObj

    //     let isAllowed = []
        
    //     // if(filter.danger)
    //     //console.log(earthObj.is_potentially_hazardous_asteroid)
    //     if (filter.danger || filter.danger != null) {
    //         isAllowed.push(earthObj.is_potentially_hazardous_asteroid === filter.danger)
    //     }

    //     if (filter.min || filter.min != null) {
    //         isAllowed.push(earthObj.estimated_diameter.miles.estimated_diameter_max >= filter.min)
    //     }
    //     //console.log(typeof filter.max)
    //     if (filter.max || filter.max != undefined && filter.max != '') {
    //         isAllowed.push(earthObj.estimated_diameter.miles.estimated_diameter_max <= filter.max)
    //     }
    //     //console.log(earthObj.is_potentially_hazardous_asteroid === filter)
    //     // return earthObj.is_potentially_hazardous_asteroid === filter
    //     if(isAllowed.includes(false)) return false
    //     return true
    //     // return earthObj.is_potentially_hazardous_asteroid == search
    // })

    const flatEarthOBJ = filteredAsteroids(flatArray, filter)
    

    return (
    <div className='p-2  mb-4'>

    <h2 className='text-3xl text-center  mb-4 text-white font-bold'>Asteriods from {start_date} to {end_date}</h2>

        <AsteroidFilter filter={filter} setFilter={setFilter} openFilter={openFilter} setOpenFilter={setOpenFilter} />
        



        
            <ul className='xl:grid grid-cols-2  gap-3'>

            {flatEarthOBJ.map((r: any) => {
                return (
                    <DateRockObject {...r} rock={r} />
                    )
                })}
            
            </ul>
        
    
    </div>
  )
}




{/* <div className='text-white flex justify-between px-10 gap-3 mb-3  text-xl  items-center'>
            {/* <button className='hover:text-red-200' onClick={() => setFilter((prev: any) => ({...prev, danger: null}))}>Show all Asteroid</button>
            <button className='hover:text-red-200'  onClick={() => setFilter((prev: any) => ({...prev, danger: true}))}>Show dangerous Asteroid</button> */}

            // <Select unstyled className='w-1/2 h-9 sm:h-11 text-sm sm:text-2xl bg-gray-500 rounded-lg text-center   ' placeholder='Show All Asteroid'  options={options} onChange={(selectedOption) => setFilter((prev: any) => ({...prev, danger: selectedOption?.value }))} classNames={selectStyles} isSearchable={false} />

            // <div >

            
            // </div>

            

            {/* <input className='text-black w-1/5 rounded text-center remove-arrow h-11 '  type='number' value={filter.min ? filter.min : undefined} onChange={(e) => setFilter((prev: any) => ({...prev, min: e.target.value }))} placeholder='set Min size in mi' style={{
                
            }}/>

            <input className='text-black w-1/5 rounded text-center remove-arrow h-11 '  type='number' value={filter.max ? filter.max: undefined} onChange={(e) => setFilter((prev: any) => ({...prev, max: e.target.value }))} placeholder='set Max size in mi ' style={{
                
            }}/> */}

        //     <div className='flex hover:text-gray-300 cursor-pointer sm:text-2xl h-9 sm:h-11 bg-gray-500   pl-2  rounded-lg items-center text-sm' ref={filterRef }>

        //         <button className='flex items-center ' onClick={() =>  setOpenFilter(!openFilter)}>
        //             Filter <BiDownArrowAlt className={'text-2xl  pb-2  '}  />
        //         </button>


        //     {openFilter && 
        //     <div className=' absolute mt-64 h-48 w-48 right-8 flex flex-col gap-6  bg-slate-400  rounded px-2 py-10 text-sm ' >

        //         <div>
        //         <p className='text-center text-white font-bold'>Set Min Size: Mi</p>
        //         <input className='text-black w-full rounded text-center remove-arrow   '  type='number' value={filter.min ? filter.min : undefined} onChange={(e) => setFilter((prev: any) => ({...prev, min: e.target.value }))} placeholder='Set Min size in mi' style={{
                    
        //         }}/>

        //         </div>

        //         <div>
        //         <p className='text-center text-white font-bold'>Set Max Size: Mi</p>
        //         <input className='text-black w-full rounded text-center remove-arrow  '  type='number' value={filter.max ? filter.max: undefined} onChange={(e) => setFilter((prev: any) => ({...prev, max: e.target.value }))} placeholder='Set Max size in mi ' style={{
                    
        //         }}/>
        //         </div>

        //     </div>
        //     }
                
            
        //     </div>

            
            
            

        // </div> */}
