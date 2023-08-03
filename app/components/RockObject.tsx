import Image from 'next/image'
import React from 'react'
import { Url } from 'url'
import CloseApproachData from './CloseApproachData'
import Link from 'next/link'

export default async function RockObject({rock, id, is_potentially_hazardous_asteroid, name_limited, nasa_jpl_url, close_approach_data, links, orbital_data, estimated_diameter }: {
    rock: object
    id: number
    is_potentially_hazardous_asteroid: boolean
    name_limited: string
    nasa_jpl_url: string
    close_approach_data: any
    links: object
    orbital_data: any
    estimated_diameter: any
}) {

  

  // console.log(estimated_diameter)
  //console.log(destructCloseApproach)
  //console.log(orbital_data.orbit_class)
  
  // const trimedDiameter = estimated_diameter.miles.estimated_diameter_min.toFixed(2)

  
  
  return (
    <div className=' w-full text-center bg-yveColor gap-4 text-lg  p-6 rounded-xl border m-2'>


        <div className='inline-flex '>


        <h2 className=' underline text-purple-800 text-3xl p-3'>Name: {name_limited}</h2>
      

        <Link className=' text-2xl  text-end hover:text-white' href={`/rocktheone/${id}`}>ID: {id}</Link>
        
        </div>
        
        <div className='outline outline-1 rounded-sm mb-4 mr-4 ml-4 p-1'>



      
        <p className=' text-2xl'>details: </p>

        <div className='md:grid grid-cols-2   mb-4  w-full mr-2 gap-2 pb-2  '>

      
      

        <p className='text-xl font-semibold'>First observation: {orbital_data.first_observation_date}</p>
        <p className='text-xl font-semibold'>Last observation: {orbital_data.last_observation_date}</p>
      
        <p className='text-xl font-semibold'>orbit uncertainty: {orbital_data.orbit_uncertainty}</p>
        <p className='text-xl font-semibold'>Is Potentially Dangerous: {is_potentially_hazardous_asteroid ? ("True") : ("False")}</p>

        {/* {is_potentially_hazardous_asteroid ? (<p className='text-lg'>This asteroid is Potentially Dangerous</p>) : (
          <p className='text-lg'>This asteroid is not dangerous</p>
        )} */}
        </div>

          </div>


          
        <div className='outline outline-1 rounded-sm mr-4 ml-4 p-1'>


        <p className='text-2xl mr-4 mb-4'>Estimated Diameter: </p>

        <div className='md:grid grid-cols-2'>


          <div className=' pb-4 ' >

          <h1 className='text-2xl  font-semibold '>Miles:</h1>
        <p className='text-xl font-semibold'>min size: {estimated_diameter.miles.estimated_diameter_min.toFixed(3)}</p>
        
        <p className='text-xl font-semibold'>max size: {estimated_diameter.miles.estimated_diameter_max.toFixed(3)}</p>
          </div>

        <div className='pb-4  '>


        <h1 className='text-2xl  font-semibold'>Kilometers:</h1>
        <p className='text-xl font-semibold'>min size: {estimated_diameter.kilometers.estimated_diameter_min.toFixed(3)}</p>
        <p className='text-xl font-semibold'>max size: {estimated_diameter.kilometers.estimated_diameter_max.toFixed(3)}</p>
        </div>

        </div>

        </div>


        

        <div className=''>

        {/* <button data-dropdown-toggle='dropdown' className='text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='button'>Show when asteroid</button> */}

        <ul className='grid grid-cols-1 md:grid-cols-2   rounded-lg mb-3 mt-3'>
          
          {close_approach_data.slice(5,11).map((close: any) => (
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
