import getAllAsteroid from '@/lib/getAllAsteroid'
import Image from 'next/image'
import RockObject from './components/RockObject'

export default async function Home() {
  const allRocks = await getAllAsteroid()
  
  //console.log(allRocks.near_earth_objects)

  //make a filter to show hazardous rocks and non hazardous rocks and display them in different sections and maybe pagenation

  // const filtedArray = allRocks.near_earth_objects.filter((object: any) => object.is_potentially_hazardous_asteroid == true )
  
return (
  <>
    <div className="p-4  mb-4  ">
        <ul className=" 2xl:grid grid-cols-2 gap-3 ">
            {allRocks.near_earth_objects.map((rock: any) => (
                
                <RockObject key={rock.id} {...rock} rock={rock} />
                
            ))}
        </ul>
    </div>
  </>
)
}
  

