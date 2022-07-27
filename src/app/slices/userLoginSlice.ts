import { createSlice } from "@reduxjs/toolkit";


export interface UserloginState {
    userId: number;
    wechat: string;
    userType: number;
    isSysUser: boolean;
    isRoot: boolean;
    managerPhone: string,
    shopLogo: string
}

const initialState: UserloginState = {
    userId: 0,
    wechat: '',
    userType: 0,
    isSysUser: false,
    isRoot: false,
    managerPhone: '',
    shopLogo: '',
  };


export const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        
    }
});


export default userLoginSlice.reducer;