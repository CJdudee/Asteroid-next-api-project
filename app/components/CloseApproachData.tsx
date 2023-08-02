import React from 'react'

export default async function CloseApproachData({close_approach_date_full, orbiting_body, miss_distance, relative_velocity}: {
  close_approach_date_full: string 
  orbiting_body: string
  miss_distance: any
  relative_velocity: any
}) {
  //console.log(miss_distance)
  // console.log(sliced)
  // console.log(close_approach_date_full)
  //console.log(miss_distance)

  const mdMiles = Number(miss_distance.miles).toFixed()
  const mdKilometers = Number(miss_distance.kilometers).toFixed()
  const rvMPH = Number(relative_velocity.miles_per_hour).toFixed()
  const rvKPH = Number(relative_velocity.kilometers_per_hour).toFixed()

  
  console.log( )
  //console.log(miss_distance.miles)
    return (
      <>
        
        <div className='p-4 outline outline-2 rounded-lg outline-purple-700 m-2 '>
          
        <p className=' text-lg font-bold'> Approach Date: </p>
        <div className='block mb-2'>


          <p className='inline-flex mr-4  '>   {close_approach_date_full}   </p>
          <p className='inline-flex'> orbiting : {orbiting_body}  </p>
        </div>

          
          <h2 className=' text-lg font-bold '>MISS DISTANCE:</h2>
          
          <div className='block mb-2'>


          <p className='inline-flex text-lg mr-4'>miles: {mdMiles}</p>
          <p className='inline-flex text-lg'>kilometers: {mdKilometers}</p>

          </div>

          <p className='text-lg font-bold'>Traveling at:</p>

          <div className='block mb-2'>


          <p className='inline-flex mr-4 text-lg'>MPH: {rvMPH}</p>
          <p className='inline-flex text-lg'>KPH: {rvKPH}</p>

          </div>

        </div>
       
          
          
          
      </>
  )
}
