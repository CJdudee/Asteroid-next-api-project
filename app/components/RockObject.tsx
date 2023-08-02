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
    <div className=' w-full text-center bg-purple-400 gap-4 text-lg  p-8 rounded-xl border m-2'>

        <h2 className=' underline text-purple-800 text-3xl pb-3'>Name: {name_limited}</h2>
      
        
        
        <div className='lg:flex'>



      
        <p className=' text-xl mr-9 mb-4'>details: </p>

        <div className='md:grid grid-cols-2 justify-evenly  mb-4 outline rounded-sm w-full mr-2 pr-2  '>

      
      

        <p className=''>First observation: {orbital_data.first_observation_date}</p>
        <p className=''>Last observation: {orbital_data.last_observation_date}</p>
      
        <p>orbit uncertainty: {orbital_data.orbit_uncertainty}</p>
        <p>Is Potentially Dangerous: {is_potentially_hazardous_asteroid ? ("True") : ("False")}</p>

        {/* {is_potentially_hazardous_asteroid ? (<p className='text-lg'>This asteroid is Potentially Dangerous</p>) : (
          <p className='text-lg'>This asteroid is not dangerous</p>
        )} */}
        </div>

          </div>


          
        <div className='lg:flex'>


        <p className='text-xl mr-4 mb-4'>Est diameter: </p>
          <div className=' w-full lg:flex outline rounded-sm mr-2 pr-2 ' >

          <h1 className='pl-2 text-lg w-1/3 '>Miles:</h1>
        <p className='mr-5'>min size: {estimated_diameter.miles.estimated_diameter_min.toFixed(3)}</p>
        <p>max size: {estimated_diameter.miles.estimated_diameter_max.toFixed(3)}</p>
          </div>

        <div className='w-full lg:flex outline rounded-sm mr-2 pr-2  '>


        <h1 className='pl-2 text-lg w-1/3'>Kilometers:</h1>
        <p className='mr-5'>min size: {estimated_diameter.kilometers.estimated_diameter_min.toFixed(3)}</p>
        <p>max size: {estimated_diameter.kilometers.estimated_diameter_max.toFixed(3)}</p>
        </div>

        </div>


        

        <div className=''>

        {/* <button data-dropdown-toggle='dropdown' className='text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='button'>Show when asteroid</button> */}

        <ul className='grid grid-cols-1 md:grid-cols-2  bg-purple-600 rounded-lg mb-3 mt-3'>
          
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

        <p className='mt-4 mb-4'>Link: <a className='m-1  underline border rounded-md p-1' href={`${nasa_jpl_url}`}> {nasa_jpl_url}</a></p>

        <Link className=' text-xl underline underline-offset-2' href={`/rocktheone/${id}`}>ID: {id}</Link>

        
        
        
    </div>
  )
}
