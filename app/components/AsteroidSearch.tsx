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
    <form className='outline  outline-slate-700 rounded-lg p-3 text-lg items-center  m-2 ' onSubmit={handleSubmit}>

    <input className=' rounded-xl text-center mr-4' type='text' value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder='look up asteroid ID ' />

    <button className='text-white' type='submit'>Find</button>
    </form>
  )
}
