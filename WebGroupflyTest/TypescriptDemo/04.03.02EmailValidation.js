//import require export关键字的使用
"use strict";
//匹配email正则表达式
var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.isAcceptable = function (s) { return emailReg.test(s); };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=04.03.02EmailValidation.js.map