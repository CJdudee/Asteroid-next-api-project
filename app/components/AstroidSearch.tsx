'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/router'

export default function AstroidSearch() {
    const [ search, setSearch ] = useState('')
    const [ start_date, setStart_date ] = useState('')
    const [ end_date, setEnd_date ] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setSearch('')

        router.push(`/${search}`)
    }

  return (
    <div>AstroidSearch</div>
  )
}
