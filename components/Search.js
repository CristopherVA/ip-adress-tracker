import React from 'react'

function Search({ tracker, handleInputChange, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className='w-full h-12 rounded-lg  '
    >

      <input
        className='w-full h-full rounded-xl outline-none border-none px-4 '
        type="text"
        name={tracker}
        placeholder='Search for any IP address or domain'
        onChange={handleInputChange}
      />
    </form>
  )
}

export default Search