import React, { useState } from 'react'

const bgColor = {
   high: 'bg-[#06cc8d]',
   avg: 'bg-[#ece11c]',
   low: 'bg-[#fa3628]',
}

function Checkbox({ name, id, ...rest}) {
   const [checked, setChecked] = useState(false);
   const onCheckedHandler = () => {
      setChecked(!checked);
   }
   return (
      <div className='flex items-center gap-2 '>
         <input type='checkbox' name={name} id={id} checked={checked} onChange={onCheckedHandler} {...rest} className={`cursor-pointer appearance-none w-5 h-5 ${checked ? bgColor[id] : 'bg-gray-100'} border-2 border-gray-500 rounded-md`} />
         <label htmlFor={id} className='cursor-pointer'>{name}</label>
      </div>
   )
}

export default Checkbox