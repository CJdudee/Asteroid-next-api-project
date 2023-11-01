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

  

 // console.log(estimated_diameter)
  //console.log(destructCloseApproach)
  // console.log(CloseApproachData)
  // console.log(nasa_jpl_url)
  // console.log(links)
  //console.log(rock)
  // const close_approach_date = close_approach_data.close_approach_date
  // const close_approach_date = close_approach_data.close_approach_date
  //console.log(orbital_data.orbit_class)
  
  return (
    <div className='w-full text-center bg-gray-200 gap-4 text-lg  p-6 rounded-xl border border-orange-500 border-x-2 border-y-2 mb-2'>

        <div className='inline-flex '>

        <h2 className=' underline text-purple-800 text-3xl p-3'>Name: {name}</h2>

        <Link className='text-2xl hover:text-orange-400' href={`/rocktheone/${id}`}>ID: {id}</Link>
       
        </div>

        {is_potentially_hazardous_asteroid ? (<p className='text-2xl mb-2'>This asteroid is Potentially Dangerous</p>) : (
          <p className='text-2xl mb-2'>This asteroid is not dangerous</p>
          )}
        
        <div className='outline outline-1 rounded-sm mb-4 mr-4 ml-4 p-1'>

        

        <p className='text-2xl mr-4 mb-4'>Estimated Diameter</p>

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
          </div>
        

        <div className=''>


        <ul className='grid grid-cols-1  rounded-lg mb-3 mt-3'>
          
          {close_approach_data.map((close: any) => (
            // <div className='outline outline-2 outline-purple-300 p-3 '>
            // <p className='inline-block p-4 text-center'>  {close.close_approach_date_full} :  </p>
            // <p className='inline-block  text-center'> | orbiting : {close.orbiting_body} | </p>
            // <p>Missed by: </p>
            // <p>miles: {close.miss_distance.miles}</p>
            // <p>kilometers: {close.miss_distance.kilometers}</p>
            // <p>Traveling at:</p>
            // <p>MPH: {close.relative_velocity.miles_per_hour}</p>
            // <p>KPH: {close.relative_velocity.kilometers_per_hour}</p>
            // </div>
            
            <CloseApproachData {...close} key={id} />
            ))}
        </ul>

            </div>
        {/* {close_approach_data.slice(5, 10).map((close: any) => (
          <CloseApproachData {...close} key={id} />
        ))} */}
        
        
        
        
        
    </div>
  )
}
