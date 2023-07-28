

import getNeoResults from '@/lib/getNeoResults'
import Image from 'next/image'
import { FormEvent, useState } from 'react'

async function rockSearch(data: FormData) {
    'use server'

    const start_date = data.get('start_date')
    const end_date = data.get('end_date') 

    if (typeof start_date !== 'string' || end_date !== 'string' || start_date > end_date ) {
        return new Error('error for some reason')
    }

    const found = await getNeoResults(start_date, end_date)

    return found.json()

    

}

export default function Home() {


  return (
    <>
  
    <form action={rockSearch} className='w-full flex justify-center md:justify-evenly' >
      <input 
      className=''
      type='date'
      title='start_date'
      />
      <input 
      className=''
      type='date'
      title='end_date'
      />
      <div>
      <button type='submit' className=' p-2 text-xl rounded-xl bg-transparent outline-1 outline'>
        Find
      </button>

      </div>

    </form>

    <ul>
      add the found items here

      </ul>

    </>
  )
}
