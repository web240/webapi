//export=对象 的使用

import validation = require('./04.04.01validation');

var telReg = /^1\d{10}$/;
class TelValidator implements validation.StringValidator {
    isAcceptable(s: string) { return telReg.test(s); }
}

export =TelValidator;