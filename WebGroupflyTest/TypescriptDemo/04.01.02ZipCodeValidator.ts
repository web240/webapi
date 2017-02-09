/// <reference path="04.01.01validation.ts" />
module Validation {
//匹配0-9的数字
    var numberRegexp = /^[0-9]+$/;
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            //长度为5位的字符串返回true
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}