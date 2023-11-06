import SingleRock from '@/app/components/SingleRock'
import getAsteroId from '@/lib/getAsteroid'

type Params = {
    params: {
        asteroidId: string
    }
}

export default async function AsteroidPage({params: {asteroidId}}: Params) {

    const asteroidData = getAsteroId(asteroidId)
    const asteroid = await asteroidData

    if(!asteroid) return <p className='flex justify-center w-full mt-6 text-white font-bold text-xl '>No Asteroid was found </p>

  return (
    <>
      <h2 className='text-3xl text-center mt-4 text-white font-bold '>Asteroid Specific</h2>
    
      <div className='p-4  mb-4'>
        <SingleRock {...asteroid} />
      </div>
    </>
  )
}
