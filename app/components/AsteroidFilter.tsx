'use client'
import { filterOptions, } from '@/util/config'
import React, { useEffect, useId, useRef } from 'react'
import { BiDownArrowAlt } from 'react-icons/bi'
// import Select from 'react-select'
import FilterDropDown from './FilterDropDown'
import dynamic from 'next/dynamic'

const Select = dynamic(() => import('react-select'), {
  ssr: false
})

export default function AsteroidFilter({setFilter, setOpenFilter, openFilter, filter  }: any) {

    const filterRef = useRef<HTMLDivElement>(null); 

    useEffect(() => {
        const handler = (e: any) => {
  
          if (!filterRef || !filterRef.current || !filterRef.current.contains(e.target)) {
            setOpenFilter(false)
          }
  
        }
        
        document.addEventListener('mousedown', handler )
  
        return () => {
          document.removeEventListener('mousedown', handler)
        }
  
  
      })

      //will move these const into the config file when finished
      const tailwindStyles = {
        Control: () => '', 
        menuList: () => "bg-red-900 mt-1 rounded ",
        option: () => 'hover:bg-red-800 py-1 rounded-xl cursor-pointer  ' ,
        SingleValue: () => 'bg-slate-300 ',
        options: () => 'bg-slate-300 hover:bg-red-400 ',
        ValueContainer: () => ' cursor-pointer   ',
        ClearIndicator: () => '',
        Input: () => ' ',
        SelectContainer: () => ' ', 
        DropdownIndicator: () => '  ', 
        Menu: () => ' ', 
        MenuPortal: () => '', 
        MultiValue: () => '', 
        MultiValueContainer: () => '', 
        Option: () => '', 
        LoadingMessage: () => '', 
        DownChevron: () => '', 
        

    }

    const selectStyles = {
      option: (styles :any) => ({
        ...styles,
        cursor: 'pointer',
        
      }),
      control: (styles: any) => ({
        ...styles,
        
        cursor: 'pointer'
      }),
      menuPortal: (styles: any) => ({
        ...styles,
      }),
      menu: (styles: any) => ({
        ...styles,
        
        
      }),
      input: (styles: any) => ({
        ...styles,
        
      }),
      container:(styles: any) => ({
        ...styles,
        
        position: 'relative',
        //still work in progess to make the react-datepicker popper to show above the react-select component 

        // width: 100,
        // when changing the zindex here the button shows up behind the date 
        // zIndex: 0,
      })
      
    }

  return (
    <div className={`text-white flex justify-between px-1 gap-3 mb-3  text-xl  items-center mt-3 max-w-4xl mx-auto `  }>
      
      <Select unstyled  placeholder='Show All Asteroid'  
      options={filterOptions} 
      onChange={(selectedOption: any) => setFilter((prev: any) => ({...prev, danger: selectedOption?.value }))} 
      classNames={tailwindStyles} isSearchable={false} 
      className='w-1/2 h-9 sm:h-11 text-sm sm:text-2xl bg-red-800 rounded-lg text-center  '
      instanceId={useId()}
      styles={selectStyles}
      />

      
      {/* make a div with a color and rounded that shows that one of the filters are active */}
      <div  ref={ filterRef }
      className={`${filter.min || filter.max ? ' ' : '' } flex hover:text-gray-300 cursor-pointer sm:text-2xl h-9 sm:h-11 bg-red-800   pl-2  rounded-lg items-center text-sm`}>

        <button className='flex items-center ' onClick={() =>  setOpenFilter(!openFilter)}>
            Filter <BiDownArrowAlt className={'text-2xl  pb-2  '}  />
        </button>


        {openFilter && <FilterDropDown filter={filter} setFilter={setFilter} /> }
          
      
      </div>
            
            

    </div>
  )
}
