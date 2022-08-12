import React from 'react'
// import { FaAngleRight } from "react-icons/fa"

function Search({ tracker, handleInputChange, handleSubmit }) {
  return (
    <div
      className='w-full h-12 rounded-lg  '
    >

      <form onSubmit={handleSubmit} className='w-full h-full rounded-xl outline-none border-none pl-4 bg-light flex justify-center'>
        <input
          className='flex-1 '
          type="text"
          name={tracker}
          placeholder='Search for any IP address or domain'
          onChange={handleInputChange}
        />
        <button 
          className='bg-very-dark-gray text-light w-14 h-full rounded-r-xl  '
          type='submit'
        >
          {/* <FaAngleRight /> */}
        </button>
      </form>

    </div>
  )
}

export default Search