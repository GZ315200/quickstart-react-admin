import { AppState } from "app/types/app";
import { getToken } from "utils/auth";
import routes from "routes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { RouteItem } from "utils/types";
import zhCN from 'antd/es/locale/zh_CN';


const initialState: AppState = {
    isSiderOpened: true,
    isHeaderFixed: true,
    isLogin: !!getToken(),
    routes,
    lang: zhCN.locale
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
        setRouteHub(state, action: PayloadAction<Array<RouteItem>>) {
            state.routes = action.payload;
        },
        setLang(state, action: PayloadAction<string>) {
            state.lang = action.payload
        }
    }
});

export const { setLoginState, setSiderState, setHeaderState, setRouteHub, setLang } = appStateSlice.actions;
export const selectAppState = (state: RootState) => state.appState

export default appStateSlice.reducer;