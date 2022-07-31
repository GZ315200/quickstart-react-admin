import { Iterable } from 'immutable';
import { configureStore, ThunkAction, Action,
  createSerializableStateInvariantMiddleware,
  isPlain } from '@reduxjs/toolkit';
import userReducer from 'app/redux/userLoginSlice';
import appReducer from 'app/redux/appStateSlice';


const isSerializable = (value: any) => Iterable.isIterable(value) || isPlain(value)

const getEntries = (value: any) => Iterable.isIterable(value) ? value.entries() : Object.entries(value)

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries
})

export const store = configureStore({
  reducer: {
    userLogin: userReducer,
    appState: appReducer,
  },
  middleware: [serializableMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
