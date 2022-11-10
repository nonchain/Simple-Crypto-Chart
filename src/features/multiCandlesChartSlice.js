import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   {id: 'high', isShow: true, name: 'High', color: '#06cc8d'},
   {id: 'avg', isShow: true, name: 'Average', color: '#ece11c'},
   {id: 'low', isShow: true, name: 'Low', color: '#fa3628'},
]

const multiCandlesSlice = createSlice({
   name: 'multiCandles',
   initialState,
   reducers: {
      showCandlesHandler(state, actions){
         const { id, status } = actions.payload;
         state.forEach( item => {
            if(item.id === id) {
               item.isShow = status;
            }
         })
      }
   }
})

export const selectAllCandlesState = state => state.multiCandles;
export const { showCandlesHandler } = multiCandlesSlice.actions;
export default multiCandlesSlice.reducer;