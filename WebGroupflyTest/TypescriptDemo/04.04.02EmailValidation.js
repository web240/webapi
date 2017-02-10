"use strict";
//匹配email正则表达式
var emailReg = /^/;
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.isAcceptable = function (s) {
        return emailReg.test(s);
    };
    return EmailValidator;
}());
module.exports = EmailValidator;
//# sourceMappingURL=04.04.02EmailValidation.js.map