'use client'

import { useSearchParams } from 'next/navigation'
import React, { SetStateAction, useEffect, useState } from 'react'
import DateRockObject from './DateRockObject'
import Link from 'next/link'
import Select from 'react-select'

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

    const selectStyles = {
        menuList: () => 'bg-black mt-1 rounded ',
        option: () => 'hover:bg-purple-800',
        SingleValue: () => 'bg-slate-300 ',
        options: () => 'bg-slate-300',
        ValueContainer: () => 'bg-yellow-300',
        ClearIndicator: () => 'bg-purple-300',
        Input: () => 'bg-purple-300',
        SelectContainer: () => 'bg-purple-300', 
        Control: () => 'bg-red-100', 
        DropdownIndicator: () => 'bg-purple-300', 
        Menu: () => 'bg-purple-300', 
        MenuPortal: () => 'bg-purple-300', 
        MultiValue: () => 'bg-purple-300', 
        MultiValueContainer: () => 'bg-purple-300', 
        Option: () => 'bg-purple-300', 
        LoadingMessage: () => 'bg-purple-300', 

    }
    //const searchParams = useSearchParams()

    //const search = searchParams.get('dang')

    //i can set all of the search params here then filter them 

    // useEffect(() => {
    //     if(search === 'true') {
    //         // setFilter((prev: any) => ({...prev, danger: true}))
    //          setFilter(true)
    //     } else if (search === 'false'){
    //         setFilter(false)
    //     } else setFilter(null) 

        
    // })

    // a basic boolean to show dangerous asteroids or to show all of the asteroids 

    //i can see how many different keys are added to filter and then filter from the keys given to me 
    const flatEarthOBJ = flatArray.filter((earthObj: any) => {
        if (!filter || !filter.danger && !filter.min && !filter.max === null) return earthObj

        let isAllowed = []
        
        // if(filter.danger)
        //console.log(earthObj.is_potentially_hazardous_asteroid)
        if (filter.danger || filter.danger != null) {
            isAllowed.push(earthObj.is_potentially_hazardous_asteroid === filter.danger)
        }

        if (filter.min || filter.min != null) {
            isAllowed.push(earthObj.estimated_diameter.miles.estimated_diameter_max >= filter.min)
        }
        //console.log(typeof filter.max)
        if (filter.max || filter.max != undefined && filter.max != '') {
            isAllowed.push(earthObj.estimated_diameter.miles.estimated_diameter_max <= filter.max)
        }
        //console.log(earthObj.is_potentially_hazardous_asteroid === filter)
        // return earthObj.is_potentially_hazardous_asteroid === filter
        if( isAllowed.includes(false)) return false
        return true
        // return earthObj.is_potentially_hazardous_asteroid == search
    })

  return (
    <>

    <h2 className='text-3xl text-center mt-4 mb-4 text-white font-bold'>Asteriods from {start_date} to {end_date}</h2>

    <div className='text-white flex justify-between px-10 gap-3 mb-3  text-xl mx-auto'>
            {/* <button className='hover:text-red-200' onClick={() => setFilter((prev: any) => ({...prev, danger: null}))}>Show all Asteroid</button>
            <button className='hover:text-red-200'  onClick={() => setFilter((prev: any) => ({...prev, danger: true}))}>Show dangerous Asteroid</button> */}

            <Select unstyled  className='w-1/4 h-12 bg-purple-600 rounded-lg text-center pt-1' placeholder='Show All Asteroid'  options={options} onChange={(selectedOption) => setFilter((prev: any) => ({...prev, danger: selectedOption?.value }))} classNames={selectStyles} isSearchable={false} />

            <div></div>
            
            <input className='text-black w-1/5 rounded text-center remove-arrow '  type='number' value={filter.max ? filter.max: undefined} onChange={(e) => setFilter((prev: any) => ({...prev, max: e.target.value }))} placeholder='set Max size in mi ' style={{
                
            }}/>

            <input className='text-black w-1/5 rounded text-center remove-arrow '  type='number' value={filter.min ? filter.min : undefined} onChange={(e) => setFilter((prev: any) => ({...prev, min: e.target.value }))} placeholder='set Min size in mi' style={{
                
            }}/>

            

        </div>

            <div className='w-1/4 h-full bg-slate-400'>

            {/* <Select placeholder='pick' options={options} /> */}
            </div>


        <div className="px-8 mb-4 ">
            <ul className='xl:grid grid-cols-2  gap-3'>

            {flatEarthOBJ.map((r: any) => {
                return (
                    <DateRockObject {...r} rock={r} />
                    )
                })}
            
                </ul>
        </div>
    
    </>
  )
}
