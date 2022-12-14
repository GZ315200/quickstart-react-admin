import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { LoginUserResp } from "app/types/user";


export interface UserloginState {
    info: {
        userId?: number;
        wechat?: string;
        userType?: number;
        isSysUser?: boolean;
        isRoot?: boolean;
        managerPhone?: string,
        shopLogo?: string,
        permissions?: Array<string>
    }
}

const initialState: UserloginState = {
    info: {
        userId: 0,
        wechat: '',
        userType: 0,
        isSysUser: false,
        isRoot: false,
        managerPhone: '',
        shopLogo: '',
        permissions: []
    }
};


export const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        addLoginUser: (state, action: PayloadAction<LoginUserResp>) => {
            state.info = {...initialState.info, ...action.payload.info  }
        },
        clearLoginUser: (state) => {
            state.info = {...initialState.info }
        }
    }
});
/**
 * use example:
 *  import { addLoginUser, clearLoginUser, selectLoginUser } from './userLoginSlice';
  const loginUser = useAppSelector(selectLoginUser);
  const dispatch = useAppDispatch();
 * 
 */
export const { addLoginUser, clearLoginUser } = userLoginSlice.actions;
export const selectLoginUser = (state: RootState) => state.userLogin


export default userLoginSlice.reducer;