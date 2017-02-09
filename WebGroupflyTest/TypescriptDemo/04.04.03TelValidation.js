//export=对象 的使用
"use strict";
var telReg = /^1\d{10}$/;
var TelValidator = (function () {
    function TelValidator() {
    }
    TelValidator.prototype.isAcceptable = function (s) { return telReg.test(s); };
    return TelValidator;
}());
module.exports = TelValidator;
