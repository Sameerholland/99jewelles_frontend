import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './Authentication/AuthSlice'

export const store = configureStore({
   reducer:{
      Auth:AuthSlice,
   }
})