import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { BarChart, Bar, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useDispatch } from 'react-redux';
import { setVolumeRange } from '../features/singleCandleChartSlice';
import Loading from './Loading';
import SingleCandle from './SingleCandle';

import 'swiper/css';
import "swiper/css/pagination";

function SingleCandlesChart() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { Data } = data;

  const findMaxVolume = (data) => {
    const volumeArray = data?.map(item => item.volume);
    volumeArray.sort((a, b) => a - b);

    return volumeArray.pop();
  }

  const findMinVolume = (data) => {
    const volumeArray = data?.map(item => item.volume);
    volumeArray.sort((a, b) => a - b);

    return volumeArray.shift();
  }

  const unixTimeFormate = (time) => {
    const unix = new Date(time * 1000);
    return unix.toLocaleString('en-US', {hour: 'numeric'});
  }

  useEffect(() => {
    fetch('https://min-api.cryptocompare.com/data/exchange/histohour?tsym=BTC&limit=10')
      .then((response) => response.json())
      .then((result) => {
        setIsLoaded(true);
        setData(result);
        dispatch(setVolumeRange([
          {id: 'min', value: findMinVolume(Data), color: '#df4242'},
          {id: 'max', value: findMaxVolume(Data), color: '#2867e1'},
        ]))

      });
  }, []);

  // Show loading spinner till data fetch
  if (!isLoaded) return <Loading />;

  return (
    <div>
      <Swiper
        pagination={true} modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}>
        {
          Data.map(item => (
            <SwiperSlide key={item.time} className='cursor-pointer h-72'>
              <div className='w-full h-full flex flex-col items-center relative'>
                <h2 className='mb-4 text-gray-800 text-xl font-semibold'>{unixTimeFormate(item.time)}</h2>
                <div className="w-full h-full relative">
                  <ResponsiveContainer width="95%" height="86%">
                    <BarChart
                      data={Data}>
                      <CartesianGrid strokeDasharray="4 3" />
                      <YAxis />
                      <Bar dataKey="volume" fill="#00000000" />
                    </BarChart>
                  </ResponsiveContainer>
                  <SingleCandle max={findMaxVolume(Data)} value={item.volume} />
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default SingleCandlesChart