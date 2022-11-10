import React, { useState, useEffect } from 'react'
import Loading from './Loading';

function VolumeRange() {
   const [data, setData] = useState([]);
   const [isLoaded, setIsLoaded] = useState(false);
   const { Data, TimeFrom, TimeTo} = data;

   const findMaxVolume = (data) => {
      const volumeArray = data?.map(item => item.volume);
      volumeArray.sort((a, b) => a - b);

      return Math.floor(volumeArray.pop());
   }

   const findMinVolume = (data) => {
      const volumeArray = data?.map(item => item.volume);
      volumeArray.sort((a, b) => a - b);

      return Math.floor(volumeArray.shift());
   }

   const unixTimeFormate = (time) => {
      const unix = new Date(time * 1000);
      return unix.toLocaleString('en-US', { hour: 'numeric' });
   }

   useEffect(() => {
      fetch('https://min-api.cryptocompare.com/data/exchange/histohour?tsym=BTC&limit=10')
         .then((response) => response.json())
         .then((result) => {
            setIsLoaded(true);
            setData(result)
         });
   }, []);

   // Show loading spinner till data fetch
   if (!isLoaded) return <Loading />;
   return (
      <React.Fragment>
         <div className='flex flex-col'>
            <h2 className='text-xl font-semibold text-gray-800'>Maximum range :</h2>
            <span className='mt-2 text-sm text-gray-500 font-medium'>
               {unixTimeFormate(TimeFrom)} to {unixTimeFormate(TimeTo)}
            </span>
            <span className='text-lg text-red-500 font-bold'>
               {findMaxVolume(Data)}
            </span>
         </div>
         <div className='flex flex-col'>
            <h2 className='text-xl font-semibold text-gray-800'>Minimum range :</h2>
            <span className='mt-2 text-sm text-gray-500 font-medium'>
               {unixTimeFormate(TimeFrom)} to {unixTimeFormate(TimeTo)}
            </span>
            <span className='text-lg text-lime-500 font-bold'>
               {findMinVolume(Data)}
            </span>
         </div>
      </React.Fragment>
   )
}

export default VolumeRange