import { configureStore } from '@reduxjs/toolkit';
import styleReducer from './styleSlice';

export const store = configureStore({
  reducer: {
    style: styleReducer,
  },
});

// Tipos inferidos para usar en hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
