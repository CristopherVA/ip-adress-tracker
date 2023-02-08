import React from 'react'
import { useRouter } from 'next/router'
import { FaAngleRight } from "react-icons/fa"

function Search({ tracker, handleInputChange, setInputValue, inputValue }) {

  const handleClick = () => {
    push({ pathname: '/', query: { tracker } })
    setInputValue(inputValue.tracker = '')
  }
  const { push } = useRouter();


  return (
    <div
      className='w-full h-12 rounded-lg bg-light lg:w-[50%] m-auto  '
    >
      <div className='w-full h-full rounded-xl outline-none border-none pl-4 flex'>
        <input
          className='w-full h-full outline-none border-none pl-4 flex-1'
          type="text"
          name='tracker'
          value={tracker}
          placeholder='Search for any IP address or domain'
          onChange={handleInputChange}
        />

        <button onClick={() => handleClick} type="button" className='rounded-r-lg h-full w-20 bg-very-dark-gray text-light flex justify-center items-center ' >
          <FaAngleRight size={20} />
        </button>

      </div>
    </div>
  )
}

export default Search