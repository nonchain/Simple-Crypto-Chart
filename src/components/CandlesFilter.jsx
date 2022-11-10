import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCandlesState } from '../features/multiCandlesChartSlice';
import { selectAllVolumeRange } from '../features/singleCandleChartSlice';
import Checkbox from './Checkbox';
import VolumeRange from './VolumeRange';

function CandlesFilter() {
   const candlesState = useSelector(selectAllCandlesState);
   const volumeRange = useSelector(selectAllVolumeRange);
   console.log(volumeRange);

   return (
      <div className='flex flex-col gap-5'>
         <div className='flex flex-col'>

            <h2 className='text-xl font-semibold text-gray-800'>Show candles :</h2>
            <div className='mt-2 pr-4 flex justify-between'>
               {
                  candlesState.map(item => (
                     <Checkbox key={item.id} name={item.name} id={item.id} isShow={item.isShow} />
                  ))
               }
            </div>
         </div>

         <VolumeRange range={volumeRange}/>
      </div>
   )
}

export default CandlesFilter