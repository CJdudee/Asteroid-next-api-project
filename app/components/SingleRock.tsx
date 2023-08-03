import Image from 'next/image'
import React from 'react'
import { Url } from 'url'
import CloseApproachData from './CloseApproachData'

export default async function SingleRock({rock, id, is_potentially_hazardous_asteroid, name, nasa_jpl_url, close_approach_data, links, orbital_data, estimated_diameter }: {
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
  //console.log(close_approach_data)
  // const close_approach_date = close_approach_data.close_approach_date
  // const close_approach_date = close_approach_data.close_approach_date
  //console.log(orbital_data.orbit_class)
  
  return (
    
   
    <div className=' text-center bg-mdPurple gap-4 text-lg p-8 rounded-xl border '>

      <div className='inline-flex'>

        <h2 className=' underline text-start text-purple-800 text-3xl p-3'>Name: {name}</h2>

        <h1 className='  text-2xl  text-end'>ID: {id}</h1>
       
      </div>
        
        
        <div className='bg-slate-200 rounded-sm mb-4  '>


        <h2 className=' text-2xl'>details:</h2>

       
      <div className='md:grid  grid-cols-2  rounded-sm w-full mr-2 '>

      
        
        <p className='bg-slate-300'>First observation: {orbital_data.first_observation_date}</p>
        <p className='bg-slate-400'>Last observation: {orbital_data.last_observation_date}</p>

        <p className='bg-slate-300'>orbit uncertainty: {orbital_data.orbit_uncertainty}</p>
        <p className='bg-slate-400'>Is Potentially Dangerous: {is_potentially_hazardous_asteroid ? ("True") : ("False")}</p>

      </div>

        {is_potentially_hazardous_asteroid ? (<p className='text-xl mb-2 bg-slate-200'>This asteroid is Potentially Dangerous</p>) : (
          <p className='text-xl mb-2 bg-slate-200'>This asteroid is not dangerous</p>
          )}

      </div>


          <div className='bg-slate-200 rounded-sm'>



        <h2 className='text-2xl mr-4 mb-4'>Estimated Diameter</h2>

        <div className='  md:grid grid-cols-2 '>


            <div className='bg-slate-300  '>

            <h1 className='text-2xl  '>Miles</h1>
        <p>min size: {estimated_diameter.miles.estimated_diameter_min}</p>
        <p>max size: {estimated_diameter.miles.estimated_diameter_max}</p>

            </div>

          <div className='bg-slate-400 '>
        <h1 className='text-2xl'>Kilometers</h1>
        <p>min size: {estimated_diameter.kilometers.estimated_diameter_min}</p>
        <p>max size: {estimated_diameter.kilometers.estimated_diameter_max}</p>
          </div>

          </div>

        </div>


        

        <div className='inline-block'>


        <ul className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-row  bg-purple-600 rounded-lg mb-3 mt-3'>
          
          {close_approach_data.map((close: any) => (
            
            
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
