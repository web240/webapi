//import require export关键字的使用

//导入Validation文件
import validation = require('./04.03.01Validation');

//匹配email正则表达式
var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
export class EmailValidator implements validation.StringValidator {
    isAcceptable(s: string) { return emailReg.test(s); }
}