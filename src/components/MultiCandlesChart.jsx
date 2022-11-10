import React, { useState } from 'react';
import { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import { selectAllCandlesState } from '../features/multiCandlesChartSlice';
import Loading from './Loading';

function MultiCandlesChart() {
   const candlesState = useSelector(selectAllCandlesState);

   const [data, setData] = useState([]);
   const [isLoaded, setIsLoaded] = useState(false);
   const { Data } = data;
   const convertedData = [];

   const unixTimeFormate = (time) => {
      const unix = new Date(time * 1000);
      return unix.toLocaleString('en-US', {hour: 'numeric'});
    }

   const convertDataHandler = (data) => {
      data?.map(item => {
         const newData = {
            high: item.high,
            low: item.low,
            avg: Math.floor((item.high + item.low) / 2),
            time: unixTimeFormate(item.time),
         }
         convertedData.push(newData);
      });
   }

   useEffect(() => {
      fetch('https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=10')
         .then((response) => response.json())
         .then((result) => {
            setIsLoaded(true);
            setData(result.Data)
         });
   }, []);

   // Show loading spinner till data fetch
   if (!isLoaded) return <Loading />;

   // Convert data to a standard format
   convertDataHandler(Data);

   return (
      <div className='h-80'>
         <ResponsiveContainer width="100%" height="100%">
            <BarChart
               data={convertedData}
            >
               <CartesianGrid strokeDasharray="4 3" />
               <XAxis dataKey="time" />
               <YAxis />
               <Tooltip />
               <Legend />
               {
                  candlesState.map(item => (
                     item.isShow && <Bar key={item.id} dataKey={item.id} fill={item.color} />
                  ))
               }
            </BarChart>
         </ResponsiveContainer>
      </div>
   )
}

export default MultiCandlesChart