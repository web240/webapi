//import require export关键字的使用
"use strict";
//匹配移动电话正则表达式
var telReg = /^1\d{10}$/;
;
var TelValidator = (function () {
    function TelValidator() {
    }
    TelValidator.prototype.isAcceptable = function (s) { return telReg.test(s); };
    return TelValidator;
}());
exports.TelValidator = TelValidator;
//# sourceMappingURL=04.03.03TelValidation.js.map