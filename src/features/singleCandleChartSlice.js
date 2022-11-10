import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   {id: 'max', value: '', color: '#df4242'},
   {id: 'min', value: '', color: '#2867e1'},
]

const singleCandlesSlice = createSlice({
   name: 'singleCandles',
   initialState,
   reducers: {
      setVolumeRange(state, actions){
         const { id, status } = actions.payload;
         state.forEach( item => {
            if(item.id === id) {
               item.isShow = status;
            }
         })
      }
   }
})

export const selectAllVolumeRange = state => state.singleCandles;
export const { setVolumeRange } = singleCandlesSlice.actions;
export default singleCandlesSlice.reducer;