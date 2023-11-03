import React from 'react'

export default function FilterDropDown({filter, setFilter}: any) {
  return (
    <div className='  absolute  mt-64 h-48 w-56 max-w-4xl  -right-20 sm:-right-60 left-1/4 mx-auto flex flex-col gap-6  bg-red-900  rounded px-2 py-10 text-sm  shadow-xl  ' >

        <div>
            <p className='text-center text-white font-bold'>Set Min Size: Mi</p>

            <input className='text-black w-full rounded text-center remove-arrow   '  
            type='number' value={filter.min ? filter.min : undefined}
            onChange={(e) => setFilter((prev: any) => ({...prev, min: e.target.value }))}
            placeholder='Set Min size in mi' style={{}}/>

        </div>

        <div>
            <p className='text-center text-white font-bold'>Set Max Size: Mi</p>

            <input className='text-black w-full rounded text-center remove-arrow  '  
            type='number' value={filter.max ? filter.max: undefined} 
            onChange={(e) => setFilter((prev: any) => ({...prev, max: e.target.value }))} 
            placeholder='Set Max size in mi ' style={{}}/>
            
        </div>

    </div>
  )
}
