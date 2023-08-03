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
    
   
    <div className='w-full text-center bg-yveColor gap-4 text-lg p-6 rounded-xl border m-2'>

      <div className='inline-flex pb-4'>

        <h2 className=' underline text-start text-purple-800 text-3xl p-3'>Name: {name}</h2>

        <h1 className='  text-2xl  text-end'>ID: {id}</h1>
       
      </div>
        
        
        <div className='outline outline-1 rounded-sm mb-4 mr-4 ml-4 p-1'>


        <h2 className=' text-2xl'>details:</h2>

       
      <div className='md:grid  grid-cols-2   w-full mr-2 gap-2 pb-2   '>

      
        
        <p className='text-xl font-semibold'>First observation: {orbital_data.first_observation_date}</p>
        <p className='text-xl font-semibold'>Last observation: {orbital_data.last_observation_date}</p>

        <p className='text-xl font-semibold'>orbit uncertainty: {orbital_data.orbit_uncertainty}</p>
        <p className='text-xl font-semibold'>Is Potentially Dangerous: {is_potentially_hazardous_asteroid ? ("True") : ("False")}</p>

      </div>

        {is_potentially_hazardous_asteroid ? (<p className='text-xl mb-2  p-2'>This asteroid is Potentially Dangerous</p>) : (
          <p className='text-xl mb-2 pb-2 '>This asteroid is not dangerous</p>
          )}

      </div>


          <div className='outline outline-1 rounded-sm mr-4 ml-4 p-1'>



        <h2 className='text-2xl mr-4 mb-4'>Estimated Diameter</h2>

        <div className='  md:grid grid-cols-2 '>


            <div className=' pb-4 '>

            <h1 className='text-2xl  font-semibold  '>Miles</h1>
        <p className='text-xl font-semibold'>min size: {estimated_diameter.miles.estimated_diameter_min}</p>
        <p className='text-xl font-semibold'>max size: {estimated_diameter.miles.estimated_diameter_max}</p>

            </div>

          <div className='pb-4 '>
        <h1 className='text-2xl font-semibold'>Kilometers</h1>
        <p className='text-xl font-semibold'>min size: {estimated_diameter.kilometers.estimated_diameter_min}</p>
        <p className='text-xl font-semibold'>max size: {estimated_diameter.kilometers.estimated_diameter_max}</p>
          </div>

          </div>

        </div>


        

        <div className=''>


        <ul className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-row   rounded-lg mb-3 mt-3'>
          
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
