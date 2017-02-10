//3.import,require关键字
"use strict";
var telValidator = require("./04.03.03TelValidation");
var emailValidator = require("./04.03.02EmailValidation");
function showMsg1() {
    //方法一
    var telObj = new emailValidator.EmailValidator();
    var tel = '13720272617';
    var flag = telObj.isAcceptable(tel);
    console.log(flag ? tel + "匹配" : tel + "\t不匹配");
    $("#msg1").html(flag ? "<sapn style='color:red'>" + tel + "匹配</span>" : "<sapn>" + tel + "\t不匹配</sapn>");
}
$(function () {
    //showMsg1();
    var string = ["13720272617", "240717653@qq.com"];
    var validators = {};
    validators["email"] = new emailValidator.EmailValidator();
    validators["tel"] = new telValidator.TelValidator();
    strings.forEach(function (s) {
        for (var name in validators) {
            console.log('"' + s + '"' + (validators[name].isAcceptable(s) ? "匹配" : "不匹配") + name);
        }
    });
});
//# sourceMappingURL=04.03.module.js.map