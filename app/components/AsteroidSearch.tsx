'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function AstroidSearch() {
    const [ search, setSearch ] = useState('')
    
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setSearch('')

        router.push(`/rocktheone/${search}`)
    }

  return (
    <form className=' rounded-lg  text-xs md:text-lg items-center   ' onSubmit={handleSubmit}>

    <p className='text-white text-center text-sm   '>Find by ID</p>

    <input className=' rounded-xl pl-3 text-start mr-2 text-black' type='text' value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder='0000000' />

    <button className='text-white' type='submit'>Find</button>

    
    </form>
  )
}
