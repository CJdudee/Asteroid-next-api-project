import Image from 'next/image'
import React from 'react'
import { Url } from 'url'
import CloseApproachData from './CloseApproachData'

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
  // console.log(CloseApproachData)
  // console.log(nasa_jpl_url)
  // console.log(links)
  //console.log(close_approach_data)
  // const close_approach_date = close_approach_data.close_approach_date
  // const close_approach_date = close_approach_data.close_approach_date
  //console.log(orbital_data.orbit_class)
  
  return (
    <div className=' w-full text-center bg-purple-400 gap-4 text-lg p-8 rounded-xl border m-2'>

        <h2 className=' underline text-purple-800 text-3xl p-3'>Name: {name_limited}</h2>
       
        
        
        

        <h2 className='items-start text-2xl'>details:</h2>

       

      

        <p className=''>First observation: {orbital_data.first_observation_date}</p>
        <p className=''>Last observation: {orbital_data.last_observation_date}</p>
        <p>orbit uncertainty: {orbital_data.orbit_uncertainty}</p>
        <p>Is Potentially Dangerous: {is_potentially_hazardous_asteroid ? ("True") : ("False")}</p>

        {is_potentially_hazardous_asteroid ? (<p className='text-lg'>This asteroid is Potentially Dangerous</p>) : (
          <p className='text-lg'>This asteroid is not dangerous</p>
          )}

        <p className=''>Estimated Diameter</p>
          <h1 className='text-2xl '>Miles</h1>
        <p>min size: {estimated_diameter.miles.estimated_diameter_min}</p>
        <p>max size: {estimated_diameter.miles.estimated_diameter_max}</p>

        <h1 className='text-2xl'>Kilometers</h1>
        <p>min size: {estimated_diameter.kilometers.estimated_diameter_min}</p>
        <p>max size: {estimated_diameter.kilometers.estimated_diameter_max}</p>


        

        <div className='inline-block'>


        <ul className='grid grid-cols-2  bg-purple-600 rounded-lg mb-3 mt-3'>
          
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

        <p>Link: <a className='m-1 underline border rounded-md p-1' href={`${nasa_jpl_url}`}> {nasa_jpl_url}</a></p>

        <h1>ID: {id}</h1>

        
        <ul>

       

        </ul>
        
    </div>
  )
}
