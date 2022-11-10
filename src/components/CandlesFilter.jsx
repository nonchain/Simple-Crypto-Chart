import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCandlesState } from '../features/multiCandlesChartSlice';
import Checkbox from './Checkbox';
import VolumeRange from './VolumeRange';

function CandlesFilter() {
   const candlesState = useSelector(selectAllCandlesState);

   return (
      <div className='flex flex-col gap-5 md:flex-row md:gap-0 md:justify-between'>
         <div className='flex flex-col'>

            <h2 className='text-xl font-semibold text-gray-800'>Show candles :</h2>
            <div className='mt-2 pr-4 flex justify-between md:pr-0 md:justify-start md:gap-5 lg:gap-8'>
               {
                  candlesState.map(item => (
                     <Checkbox key={item.id} name={item.name} id={item.id} isShow={item.isShow} />
                  ))
               }
            </div>
         </div>

         <VolumeRange />
      </div>
   )
}

export default CandlesFilter