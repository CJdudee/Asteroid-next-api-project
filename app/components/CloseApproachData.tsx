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
    return (
      <>
        
        <div className='p-4 outline outline-2 rounded-lg outline-purple-700 '>
          
        <p className=' text-2xl'> Close Approach Date: </p>

          <p className='text-xl text-start inline-block p-4 '>| Passing at:  {close_approach_date_full} :  </p>
          <p className='text-xl inline-block text-center'> orbiting : {orbiting_body} | </p>

          
          <h2 className=' text-2xl'>MISS DISTANCE:</h2>
          
          

          <p className=' text-xl'>kilometers: {miss_distance.kilometers}</p>
          <p className='text-xl'>miles: {miss_distance.miles}</p>

          <p className='text-2xl'>Traveling at:</p>

          <p className='text-xl'>MPH: {relative_velocity.miles_per_hour}</p>
          <p className='text-xl'>KPH: {relative_velocity.kilometers_per_hour}</p>

        </div>
       
          
          
          
      </>
  )
}
