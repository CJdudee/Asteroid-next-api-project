'use client'
import React from 'react'
import CloseApproachData from './CloseApproachData'
import Link from 'next/link'


//these components are slightly different cause the api sends different data 

export default  function DateRockObject({rock, id, is_potentially_hazardous_asteroid, name, nasa_jpl_url, close_approach_data, links, estimated_diameter }: {
    rock: object
    id: number
    is_potentially_hazardous_asteroid: boolean
    name: string
    nasa_jpl_url: string
    close_approach_data: any
    links: object
    orbital_data: any
    estimated_diameter: any
}) {

  
  return (
    <div className=' mx-auto mb-2 p-5 text-center w-full text-lg bg-gray-200 border border-red-500 border-x-2 border-y-2 rounded-xl max-w-4xl'>

      <div className='inline-flex '>

        <h2 className=' underline text-purple-800 text-3xl p-3'>Name: {name}</h2>

        <Link className='text-2xl hover:text-orange-400' href={`/rocktheone/${id}`}>ID: {id}</Link>
  
      </div>

      {is_potentially_hazardous_asteroid ? 
      (<p className='text-2xl mb-2 font-semibold'>This asteroid is Potentially Dangerous</p>) 
      : 
      (<p className='text-2xl mb-2 font-semibold'>This asteroid is not dangerous</p>)}
      {/* start of EST Diameter */}
      <div className='outline outline-1 rounded mb-4 mx-2 p-1'>

        <p className='text-2xl mb-2'>Estimated Diameter</p>

        <div className='md:grid grid-cols-2'>

          <div className='pb-4'>

            <h1 className='text-2xl  font-semibold '>Miles</h1>
            <p className='text-xl  font-semibold'>min size: {estimated_diameter.miles.estimated_diameter_min}</p>
            <p className='text-xl  font-semibold'>max size: {estimated_diameter.miles.estimated_diameter_max}</p>

          </div>

          <div className='pb-4'>

            <h1 className='text-2xl  font-semibold'>Kilometers</h1>
            <p className='text-xl  font-semibold'>min size: {estimated_diameter.kilometers.estimated_diameter_min}</p>
            <p className='text-xl  font-semibold'>max size: {estimated_diameter.kilometers.estimated_diameter_max}</p>

          </div>

        </div>
        {/* end of EST Diameter */}

      </div>
        
      <div className=''>

        <ul className='grid grid-cols-1 rounded'>
          
          {close_approach_data.map((close: any) => (
            <CloseApproachData {...close} key={id} />
            ))}
        </ul>

      </div>
        
    </div>
  )
}
