import { configureStore } from '@reduxjs/toolkit';
import multiCandlesChartSlice from '../features/multiCandlesChartSlice';

export const store = configureStore({
   reducer: {
      multiCandles: multiCandlesChartSlice,
   }
})