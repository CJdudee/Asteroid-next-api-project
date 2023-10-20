import getAllAsteroid from '@/lib/getAllAsteroid'
import Image from 'next/image'
import RockObject from './components/RockObject'

export default async function Home() {
  const allRocks = await getAllAsteroid()

  //console.log(allRocks.near_earth_objects)
  
return (
  <>
  <div className="p-6  mb-4  ">
      <ul className=" 2xl:grid grid-cols-2 gap-3 ">
          {allRocks.near_earth_objects.map((rock: any) => (
              
              <RockObject key={rock.id} {...rock} rock={rock} />
              
          ))}
      </ul>
  </div>
  </>
)
}
  

