'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function AstroidDate() {
    const [ start_date, setStart_date ] = useState('')
    const [ end_date, setEnd_Date ] = useState('')
    
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setStart_date('')
        setEnd_Date('')

        router.push(`/findbydate/${start_date}/${end_date}`)
    }

  return (
    <form className=' rounded-lg text-xs  md:text-lg   ' onSubmit={handleSubmit}>

    <p className='text-white text-sm text-center'>Only a week timeframe</p>

    <div className='flex gap-2'>
      
      <div className='grid grid-cols-2 md:flex justify-center gap-2'>

    <input name='start_date' id='start_date' className=' rounded-xl text-center  ' type='date' value={start_date} onChange={(e) => {setStart_date(e.target.value)}} />
        

    <input className=' rounded-xl text-center  ' type='date' value={end_date} onChange={(e) => {setEnd_Date(e.target.value)}} />
      
      </div>

    <button className='text-white' type='submit'>Find</button>
    </div>


    


    </form>
  )
}