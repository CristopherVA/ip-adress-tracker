import React from 'react'
import CardData from './CardData'
import Search from './Search'

function Header() {
  return (
    <div
      className="header z-50"
    >

      <h1 className="text-center text-light text-xl py-5 font-bold">IP Adress Tracker</h1>

      <div className='px-5'>
        <Search />
        <CardData />
      </div>
    </div>
  )
}

export default Header