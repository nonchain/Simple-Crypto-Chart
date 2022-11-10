import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const singleCandlesSlice = createSlice({
   name: 'singleCandles',
   initialState,
   reducers: {
      setVolumeRange(state, actions){
         state.push(actions.payload);
      }
   }
})

export const selectAllVolumeRange = state => state.singleCandles;
export const { setVolumeRange } = singleCandlesSlice.actions;
export default singleCandlesSlice.reducer;