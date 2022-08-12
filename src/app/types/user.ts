

export interface LoginUserResp {
    info: {
        userId?: number;
        wechat?: string;
        userType?: number;
        isSysUser?: boolean;
        isRoot?: boolean;
        managerPhone?: string,
        shopLogo?: string,
        loginTime?: string,
        permissions?: Array<string>
    }
}


export interface UserReq {
    managerPhone: string;
    accessToken: string;
    rememberMe: boolean;
}

export interface ResetPsd {
    managerPhone: string;
    verifyCode: string;
}