import React from 'react'
import { GiAsteroid } from 'react-icons/gi'

export default function LoadingComp() {
  return (
    <div className=' justify-center text-xl font-bold h-screen items-center bg-slate-300 align-middle flex'>

      <p className=' pl-2 text-2xl mb-2  '>
        Loading
      </p>
      <div className=' animate-bounce flex ml-1'>

      <GiAsteroid />
      <GiAsteroid className={'pt-1'} />
      <GiAsteroid className={''} />
      </div>
      
      {/* <GiAsteroid className={'animate-bounce pl-2 w-20 h-20'} /> */}
    </div>
  )
}
