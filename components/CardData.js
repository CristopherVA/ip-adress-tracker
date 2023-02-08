import React from 'react'

function CardData() {


   return (
      <div className='grid grid-cols-1 py-8 bg-light rounded-xl mt-4 shadow-lg shadow-very-dark-gray md:grid-cols-2 lg:grid-cols-4'>
         <div className='py-4'>
            <p className='font-bold text-xs tracking-widest text-dark-gray text-center sm:text-lg lg:text-xl'>IP ADDRESS</p>
            <p className='text-center font-bold mt-1   text-very-dark-gray text-xl sm:text-xl lg:py-6 lg:text-3xl'>192.099.009.000</p>
         </div>

         <div className='py-4'>
            <p className='font-bold text-xs tracking-widest text-dark-gray text-center sm:text-lg lg:text-xl'>LOCATION</p>
            <p className='text-center font-bold mt-1   text-very-dark-gray text-xl sm:text-xl lg:py-6 lg:text-3xl'>Broklyn, NY 10001</p>
         </div>

         <div className='py-4'>
            <p className='font-bold text-xs tracking-widest text-dark-gray text-center sm:text-lg lg:text-xl'>TIMEZONE</p>
            <p className='text-center font-bold mt-1   text-very-dark-gray text-xl sm:text-xl lg:py-6 lg:text-3xl'>UTC-05:00</p>
         </div>

         <div className='py-4'>
            <p className='font-bold text-xs tracking-widest  text-dark-gray text-center sm:text-lg lg:text-xl'>ISP</p>
            <p className='text-center font-bold mt-1   text-very-dark-gray text-xl  sm:text-xl lg:py-6 lg:text-3xl'>SpaceX Starlink</p>
         </div>
      </div>
   )
}

export default CardData