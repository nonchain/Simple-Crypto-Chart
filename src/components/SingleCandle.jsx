import React from 'react'

function SingleCandle({ max, value }) {
   const percent = Math.floor(value*100) / max;
   console.log(value)
   return (
      <div className='absolute top-1 left-1/2 h-[83%] w-11 rounded bg-gray-100'>
         <div style={{ height: `${percent}%` }} className='w-full absolute bottom-0 bg-blue-500'></div>
      </div>
   )
}

export default SingleCandle