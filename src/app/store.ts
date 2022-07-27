import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from 'app/slices/userLoginSlice';

export const store = configureStore({
  reducer: {
    userLogin: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
