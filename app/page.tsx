import getAllAsteroid from '@/lib/getAllAsteroid'
import Image from 'next/image'
import RockObject from './components/RockObject'
import HomePageTab from './components/HomePageTab'

export default async function Home() {
  const allRocks = await getAllAsteroid()
  
  //console.log(allRocks.near_earth_objects)

  //make a filter to show hazardous rocks and non hazardous rocks and display them in different sections and maybe pagenation

  // const filtedArray = allRocks.near_earth_objects.filter((object: any) => object.is_potentially_hazardous_asteroid == true )
  
return (
  <>
   <HomePageTab near_earth_objects={allRocks.near_earth_objects} />
  </>
)
}
  

