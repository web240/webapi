//import require export关键字的使用

//导入Validation文件
import validation = require('./04.03.01Validation');

//匹配移动电话正则表达式
var telReg = /^1\d{10}$/;;
export class TelValidator implements validation.StringValidator {
    isAcceptable(s: string) { return telReg.test(s); }
}