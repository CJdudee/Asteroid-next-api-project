

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
  <p className="text-2xl">add pagination to this page</p>
  <p className="pt-4 pl-4 text-purple-900 text-2xl underline">browse asteroid</p>
  <div className=" p-4">
      <ul className="p-4">
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
  

