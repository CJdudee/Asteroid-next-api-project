'use client'

import getNeoResults from '@/lib/getNeoResults'
import Image from 'next/image'
import { FormEvent, useState } from 'react'

export default function Home() {

  const [ start_date, setStart_date ] = useState('')
  const [end_date, setEnd_date ] = useState('')

  const [found, setFound ] = useState()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    

    if (start_date === undefined || end_date === undefined || start_date > end_date) return null

    const result = await getNeoResults(start_date, end_date)

    const nojFind = result.find('near_earth_objects')
    setFound(nojFind)
  console.log(result)
  console.log(found)
   }

  return (
    <>
  
    <form className='w-full flex justify-center md:justify-evenly' onSubmit={handleSubmit}>
      <input 
      className=''
      type='date'
      value={start_date} 
      onChange={( e ) => setStart_date(e.target.value)}
      />
      <input 
      className=''
      type='date'
      value={end_date} 
      onChange={( e ) => setEnd_date(e.target.value)}
      />
      <button className=' p-2 text-xl rounded-xl bg-transparent outline-1 outline'>
        Find
      </button>

    </form>

    <ul>
      add the found items here

      </ul>

    </>
  )
}
