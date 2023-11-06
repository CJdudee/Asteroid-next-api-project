'use client'

import { useState, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { addDays, formatISO, formatISO9075 } from 'date-fns'
import DatePicker from 'react-datepicker'
import '@/app/datepicker.css'






export default function AstroidDate() {
    const [ start_date, setStart_date ] = useState<Date | null>()
    //const [ end_date, setEnd_Date ] = useState('')


    
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if(!start_date || !formatISO(start_date)) return 

        const dateISO = formatISO(start_date)
        
        const endDateISO = formatISO(addDays(start_date, 3))
        console.log(dateISO.slice(0, dateISO.indexOf('T')))
        const slicedStartDate = dateISO.slice(0, dateISO.indexOf('T'))
        const slicedEndDate = endDateISO.slice(0, endDateISO.indexOf('T'))
        
        setStart_date(null)
        // setEnd_Date('')

        router.push(`/findbydate/${slicedStartDate}/${slicedEndDate}`)
    }


  return (
    <form className=' rounded-lg text-xs  md:text-lg ' onSubmit={handleSubmit}>

      <div className='flex gap-2'>
      
        <div className='flex justify-center '>

          

          <DatePicker selected={start_date} onSelect={() => {}} 
          dateFormat={'yyyy/MM/dd'} onChange={(date) => {
            if (!date) return
            setStart_date(date)
          }}
          allowSameDay={true}  locale={'en'} 
          className='pl-3 w-48 rounded-xl text-start' calendarClassName='' 
          monthsShown={1} 
          //this is hidden cause the popper is cause zindex issues with the react select under it 
          popperClassName='hidden'
          placeholderText={'Find By Date'}  />

        </div>
        
      <button className='text-white hover:text-gray-300  ' type='submit'>Find</button>

      </div>


    </form>
  )
}



{/* <input name='start_date' id='start_date' className=' rounded-xl text-center  ' type='date' value={start_date} onChange={(e) => {setStart_date(e.target.value)}} /> */}
{/* <input name='start_date' id='start_date' className=' rounded-xl text-center  ' type='date' value={start_date} onChange={(e) => {
setStart_date(e.target.value)
console.log(start_date)}} /> */}