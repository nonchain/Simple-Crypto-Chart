import React from 'react'

function Card({children, className}) {
  return (
    <div className={`px-3 py-4 w-full bg-white rounded-md shadow-sm md:p-6 lg-p-8 ${className}`}>
      {children}
    </div>
  )
}

export default Card