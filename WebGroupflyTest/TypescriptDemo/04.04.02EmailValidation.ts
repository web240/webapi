//export=对象 的使用
import validation = require('./04.04.01Validation');

//匹配email正则表达式
var emailReg = /^/;
class EmailValidator implements validation.StringValidator {
    isAcceptable(s: string) {
        return emailReg.test(s);
    }
}
export =EmailValidator;//export=对象
