interface IUserInfo {
    age: any;
    userName: string;
}

//获取用户信息
function getUserInfo(user: IUserInfo): string {
    return user.age += "====" + user.userName;
}

//