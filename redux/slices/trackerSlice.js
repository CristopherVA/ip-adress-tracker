import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   ipadress: null,
   location: null,
   timezone: null,
   ips: null
}

const trackerSlice = createSlice({
   name: 'tracker',
   initialState,
   reducer: {
      setIpadress: (state, action) => {
         state.ipadress = action.payload
      },
      setLocation: (state, action) => {
         state.location = action.payload
      },
      setTimezone: (state, action) => {
         state.timezone = action.payload
      },
      setIps: (state, action) => {
         state.ips = action.payload
      },

   }
})

export const { setIpadress, setLocation, setTimezone, setIps } =  trackerSlice.actions

export const selectIpadress =(state) => state.tracker.ipadress;
export const selectLocation =(state) => state.tracker.location;
export const selectTimezone =(state) => state.tracker.timezone;
export const selectIps =(state) => state.tracker.ips;


export default trackerSlice.reducer