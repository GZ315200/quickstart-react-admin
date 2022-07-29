import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from 'app/redux/userLoginSlice';
import appReducer from 'app/redux/appStateSlice';

export const store = configureStore({
  reducer: {
    userLogin: userReducer,
    appState: appReducer,
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
