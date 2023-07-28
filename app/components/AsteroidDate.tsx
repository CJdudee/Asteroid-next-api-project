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
    <form className='outline  outline-slate-700 rounded-lg p-3 text-lg items-center  m-2' onSubmit={handleSubmit}>
        
    <input name='start_date' id='start_date' className=' rounded-xl text-center mr-4' type='date' value={start_date} onChange={(e) => {setStart_date(e.target.value)}} />

    <input className=' rounded-xl text-center mr-4' type='date' value={end_date} onChange={(e) => {setEnd_Date(e.target.value)}} />


    <button className='text-white' type='submit'>Find</button>


    </form>
  )
}