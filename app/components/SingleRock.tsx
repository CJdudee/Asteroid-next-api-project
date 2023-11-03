import React from 'react'
import CloseApproachData from './CloseApproachData'

//these components are slightly different cause the api sends different data 

export default async function SingleRock({ rock, id, is_potentially_hazardous_asteroid, name, nasa_jpl_url, close_approach_data, links, orbital_data, estimated_diameter }: {
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

   //console.log(close_approach_data)
   // const close_approach_date = close_approach_data.close_approach_date
   // const close_approach_date = close_approach_data.close_approach_date
   //console.log(orbital_data.orbit_class)
  return (
    
   
    <div className='w-full text-center bg-gray-200 gap-4 text-lg p-6 rounded-xl  max-w-7xl mx-auto border border-orange-500 border-x-2 border-y-2 '>

      <div className='inline-flex  '>

        <h2 className=' underline  text-purple-800 text-3xl p-3  '>Name: {name}</h2>

        <h1 className='  text-2xl mr-2   '>ID: {id}</h1>
       
      </div>

      {is_potentially_hazardous_asteroid ? 
        (<p className='text-2xl mb-2 font-semibold'>This asteroid is Potentially Dangerous</p>) 
        : (
        <p className='text-2xl mb-2 font-semibold'>This asteroid is not dangerous</p>
        )}
       
        {/*  div containing Details section and Est Diameter */}
      <div className=''>

        
        <div className='outline outline-1 rounded-lg mb-4 mx-3 p-1'>


          <h2 className=' text-2xl font-bold'>Details:</h2>

       
          <div className='md:grid grid-rows-2   mb-4  w-full  gap-2 pb-2  '>

      
      
            <div className='md:grid grid-cols-2 w-full'>
              <p className='text-xl font-semibold'>First observation: {orbital_data.first_observation_date}</p>
              <p className='text-xl font-semibold'>Last observation: {orbital_data.last_observation_date}</p>
            </div>

            <p className='text-xl font-semibold'>orbit uncertainty: {orbital_data.orbit_uncertainty}</p>
          
          </div>

      </div>


      <div className='outline outline-1 rounded-lg mr-3 ml-3 p-1'>



        <h2 className='text-2xl mr-4 mb-4 font-bold'>Estimated Diameter:</h2>

        <div className='  md:grid grid-cols-2 '>


          <div className=' pb-4 '>

            <h1 className='text-2xl  font-semibold  '>Miles</h1>

            <p className='text-xl font-semibold mb-1'>min size: {estimated_diameter.miles.estimated_diameter_min}</p>
            <p className='text-xl font-semibold'>max size: {estimated_diameter.miles.estimated_diameter_max}</p>

          </div>

          <div className='pb-4 '>

            <h1 className='text-2xl font-semibold'>Kilometers</h1>

            <p className='text-xl font-semibold mb-1'>min size: {estimated_diameter.kilometers.estimated_diameter_min}</p>

            <p className='text-xl font-semibold'>max size: {estimated_diameter.kilometers.estimated_diameter_max}</p>

          </div>

        </div>

      </div>

      </div>



        

      <div className='p-1'>


        <ul className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-row   rounded-lg mb-3 mt-3'>
          {close_approach_data.map((close: any) => (
            <CloseApproachData {...close} key={id} />
            ))}
        </ul>

      </div>
        
        
    </div>
        
  )
}

{/* {close_approach_data.slice(5, 10).map((close: any) => (
          <CloseApproachData {...close} key={id} />
        ))} */}