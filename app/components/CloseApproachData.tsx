'use client'

import { numberWithCommas } from '@/util/helpers'
import React from 'react'

export default  function CloseApproachData({close_approach_date_full, orbiting_body, miss_distance, relative_velocity}: {
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

  
  
    return (
      <>
        
        <div className='p-4 outline outline-1  rounded-lg bg-gray-300  m-2 '>
          
          <p className=' text-xl font-bold'> Approach Date: </p>

          <div className='block mb-2'>
            <p className='inline-flex mr-4 font-semibold '>   {close_approach_date_full}   </p>
            <p className='inline-flex font-semibold'> Orbiting : {orbiting_body}  </p>
          </div>

          <h2 className=' text-xl font-bold '>MISS DISTANCE:</h2>
          
          <div className='block mb-2'>


            <p className='inline-flex text-lg mr-4 font-semibold'>miles: {numberWithCommas(mdMiles)}</p>
            <p className='inline-flex text-lg font-semibold'>kilometers: {numberWithCommas(mdKilometers)}</p>

          </div>

          <p className='text-xl font-bold'>Traveling at:</p>

          <div className='block mb-2'>


            <p className='inline-flex mr-4 text-lg font-semibold'>MPH: {numberWithCommas(rvMPH)}</p>
            <p className='inline-flex text-lg font-semibold'>KPH: {numberWithCommas(rvKPH)}</p>

          </div>

        </div>
      </>
  )
}
