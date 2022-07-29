

export interface LoginUserResp {
    info: {
        userId: number;
        wechat: string;
        userType: number;
        isSysUser: boolean;
        isRoot: boolean;
        managerPhone: string,
        shopLogo: string,
        loginTime: string
    }
}