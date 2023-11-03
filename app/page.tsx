import getAllAsteroid from '@/lib/getAllAsteroid'
import HomePageTab from './components/HomePageTab'

export default async function Home() {
  
  const allRocks = await getAllAsteroid()
  
return (
  <>
   <HomePageTab near_earth_objects={allRocks.near_earth_objects} />
  </>
)
}
  

//checked