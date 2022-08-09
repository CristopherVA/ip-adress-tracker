import React from 'react'

function Search() {
  return (
    <div
      className='w-full h-12 rounded-lg  '
    >

      <input
        className='w-full h-full rounded-xl outline-none border-none px-4 '
        type="text"
        name="search"
        placeholder='Search for any IP address or domain'
      />
    </div>
  )
}

export default Search