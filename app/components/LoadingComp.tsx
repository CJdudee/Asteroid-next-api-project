import { randomFacts } from '@/util/config'
import React from 'react'
import { GiAsteroid } from 'react-icons/gi'
//maybe make a function that returns a random fact about space and display it at the bootom of the Loading
export default function LoadingComp() {

  const getRandomFact = () => {
    const randomNum = Math.floor(Math.random() * 6)
    const fact = randomFacts[randomNum]
    return fact
  }

  const fact = getRandomFact()

  return (
    <div className=' justify-center text-xl font-bold h-screen items-center bg-gradient-to-br  from-indigo-800 to-black align-middle flex flex-col '>

      <div>
        

      <p className=' pl-2 text-2xl mb-2 block text-white  '>
        Loading
      </p>

      <div className=' animate-bounce flex mt-3  justify-center text-white'>
      <GiAsteroid />
      <GiAsteroid className={'pt-1'} />
      <GiAsteroid className={''} />
      </div>

      </div>
      
      <div className='mt-6 text-sm text-white'>
        <p>{fact}</p>
      </div>
      
    </div>
  )
}
