/// <reference path="04.01.01validation.ts" />
var Validation;
(function (Validation) {
    //匹配0-9的数字
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            //长度为5位的字符串返回true
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=04.01.02ZipCodeValidator.js.map