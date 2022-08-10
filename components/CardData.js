import React from 'react'

function CardData() {
   return (
      <div className='bg-light w-full h-64 py-4 rounded-xl relative -bottom-5 px-4 flex flex-col justify-between'>
         <div>
            <p className='font-bold text-xs text-dark-gray text-center'>IP ADDRESS</p>
            <p className='text-center font-semibold  text-very-dark-gray text-xl '>465.45.54.88</p>
         </div>

         <div>
            <p className='font-bold text-xs text-dark-gray text-center'>LOCATION</p>
            <p className='text-center font-semibold  text-very-dark-gray text-xl '>465.45.54.88</p>
         </div>

         <div>
            <p className='font-bold text-xs text-dark-gray text-center'>TIMEZONE</p>
            <p className='text-center font-semibold  text-very-dark-gray text-xl '>465.45.54.88</p>
         </div>

         <div>
            <p className='font-bold text-xs  text-dark-gray text-center'>ISP</p>
            <p className='text-center font-semibold  text-very-dark-gray text-xl '>465.45.54.88</p>
         </div>
      </div>
   )
}

export default CardData