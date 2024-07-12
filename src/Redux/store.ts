import { configureStore } from '@reduxjs/toolkit'
import customizeReducer from './Slices/Customize-slice';
export const store = configureStore({
  reducer: {
    customize: customizeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;