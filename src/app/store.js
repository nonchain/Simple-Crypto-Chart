import { configureStore } from '@reduxjs/toolkit';
import multiCandlesChartSlice from '../features/multiCandlesChartSlice';
import singleCandleChartSlice from '../features/singleCandleChartSlice';

export const store = configureStore({
   reducer: {
      multiCandles: multiCandlesChartSlice,
      singleCandles: singleCandleChartSlice,
   }
})