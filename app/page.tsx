

import getAllAsteroid from '@/lib/getAllAsteroid'
import getNeoResults from '@/lib/getNeoResults'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import RockObject from './components/RockObject'

export default async function Home() {
  const allRocks = await getAllAsteroid()
  //console.log(allRocks.near_earth_objects)
  
return (
  <>
  <p className="text-2xl text-center mt-2">browse all asteroid</p>
  
  <div className="p-2  ">
      <ul className="p-4 2xl:grid grid-cols-2 gap-3 ">
          {allRocks.near_earth_objects.map((rock: any) => (
              <>
              <RockObject key={rock.id} {...rock} rock={rock} />
              </>
          ))}
      </ul>
  </div>
          </>
)
}
  

