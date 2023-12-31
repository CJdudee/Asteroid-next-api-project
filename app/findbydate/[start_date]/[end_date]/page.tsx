import DateRockTab from '@/app/components/DateRockTab'
import flatDateArray from '@/lib/flatDateArray'
import getAsteroidByDate from '@/lib/getAsteroidByDate'

type Params = {
    params: {
        start_date: string
        end_date: string
    }
}

export default async function AsteroidPage({params: {start_date, end_date}}: Params) {

    const asteroidData = getAsteroidByDate(start_date, end_date)

    
    const asteroidByDate = await asteroidData

    //console.log(asteroidByDate)

    
    const flatArray = flatDateArray(asteroidByDate.near_earth_objects)
    

  return (
    <>

    <DateRockTab flatArray={flatArray} start_date={start_date} end_date={end_date} />
    
    </>
  )
}
