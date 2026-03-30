import { configureStore } from '@reduxjs/toolkit'
import slice from './Slices/Slice.jsx'
import  userSlice  from './Slices/UserSlice.jsx'


export const store = configureStore({
  reducer: {
    allProducts: slice,
    userInfo: userSlice
  },
})