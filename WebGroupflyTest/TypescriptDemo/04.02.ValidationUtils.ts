module ValidationUtils {
//声明StringValidator字符串验证器
    export interface StringValidator {
        isAcceptable(str: string): boolean;
    }

    //匹配email正则表达式
    var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    export class EmailValidator implements StringValidator {
        isAcceptable(s: string) {
            return emailReg.test(s);
        }
    }

    //匹配移动电话号码
    var telReg = /^1\d{10}$/;
    export class TelValidator implements StringValidator {
        isAcceptable(s: string) {
            return telReg.test(s);
        }
    }
}