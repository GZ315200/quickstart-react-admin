import { AppState } from "app/types/app";
import { getToken } from "utils/auth";
import routes, { RouteHub } from "routes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";


const initialState: AppState = {
    isSiderOpened: true,
    isHeaderFixed: true,
    isLogin: !!getToken(),
    routes,
  }

export const appStateSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoginState(state, action: PayloadAction<boolean>) {
            state.isLogin = action.payload;
        },
        setSiderState(state, action: PayloadAction<boolean>) {
            state.isSiderOpened = action.payload;
        },
        setHeaderState(state, action: PayloadAction<boolean>) {
            state.isHeaderFixed = action.payload;
        },
        setRouteHub(state, action: PayloadAction<RouteHub>) {
            state.routes = action.payload;
        }
    }
});

export const { setLoginState, setSiderState, setHeaderState, setRouteHub } = appStateSlice.actions;
export const selectAppState = (state: RootState) => state.app

export default appStateSlice.reducer;