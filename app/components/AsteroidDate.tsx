'use client'

import { useState, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { addDays, formatISO, formatISO9075 } from 'date-fns'
import DatePicker from 'react-datepicker'
import '@/app/datepicker.css'






export default function AstroidDate() {
    const [ start_date, setStart_date ] = useState<Date>()
    const [ end_date, setEnd_Date ] = useState('')


    
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if(!start_date || !formatISO(start_date)) return 

        const dateISO = formatISO(start_date)
        
        const endDateISO = formatISO(addDays(start_date, 1))
        console.log(dateISO.slice(0, dateISO.indexOf('T')))
        const slicedStartDate = dateISO.slice(0, dateISO.indexOf('T'))
        const slicedEndDate = endDateISO.slice(0, endDateISO.indexOf('T'))
        //@ts-ignore
        setStart_date('')
        setEnd_Date('')

        router.push(`/findbydate/${slicedStartDate}/${slicedEndDate}`)
    }

    useEffect(() => {
      console.log(start_date)
    //   if(!(new Date(start_date))) return console.log(start_date)

    //   const weekFromStart = addDays(new Date(start_date), 6)

    //   const year = weekFromStart.getFullYear()
    //   let month = weekFromStart.getMonth()
    //   let day = weekFromStart.getDay()
      

    //   if(month <= 9) month = `0${month}`
    //   if(day <= 9) day = `0${day}`

    //   const fullYr = `${year}-${month}-${day}`
      
    //   console.log(fullYr, 'hello there')
    //   //console.log(typeof start_date, 'hello there')
      
    //   setEnd_Date(fullYr)
    }, [start_date])

  return (
    <form className=' rounded-lg text-xs  md:text-lg ' onSubmit={handleSubmit}>

    {/* <p className='text-white text-sm text-center'>Only a week timeframe</p> */}

    <div className='flex gap-2'>
      
      <div className='flex justify-center'>

    {/* <input name='start_date' id='start_date' className=' rounded-xl text-center  ' type='date' value={start_date} onChange={(e) => {setStart_date(e.target.value)}} /> */}
    {/* <input name='start_date' id='start_date' className=' rounded-xl text-center  ' type='date' value={start_date} onChange={(e) => {
      setStart_date(e.target.value)
      console.log(start_date)}} /> */}
      <DatePicker selected={start_date} onSelect={() => {}} dateFormat={'yyyy/MM/dd'} onChange={(date) => {
        if (!date) return
        setStart_date(date)
      }} allowSameDay={true}  locale={'en'} className='pl-3 w-48 rounded-xl text-start' calendarClassName='' monthsShown={1} popperClassName='absolute ' placeholderText={'Find By Date'}  />

    {/* <input className=' rounded-xl text-center  ' type='date' value={end_date} onChange={(e) => {setEnd_Date(e.target.value)}} />
       */}
      </div>
    <button className='text-white hover:text-gray-300 ' type='submit'>Find</button>

    </div>


    


    </form>
  )
}