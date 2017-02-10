//不分文件实现module
var strs = ["13720272617", "240717653@qq.com"];
var validators1 = {};
validators1["Tel"] = new ValidationUtils.TelValidator; //验证手机号
validators1["Email"] = new ValidationUtils.EmailValidator; //验证Email
function showMsg1() {
    strs.forEach(function (s) {
        for (var name in validators1) {
            console.log('"' + s + '"' + (validators1[name].isAcceptable(s) ? '匹配' : '不匹配') + name);
        }
    });
}
function showMsg2() {
    //方法一
    var telObj;
    telObj = new ValidationUtils.TelValidator;
    //方法二
    //var telObj = new ValidationUtils.TelValidator;
    var tel = "13720272617";
    var flag = telObj.isAcceptable(tel); //调用TelValidator类的isAcceptable方法
    console.log(flag ? tel + "\t匹配" : tel + "\t不匹配");
    $("#msg2").html(flag ? "<span style='color:red'>" + tel + "匹配</span>" : "<span>" + tel + "\t不匹配</span>");
}
$(function () {
    showMsg1();
    showMsg2();
});
//# sourceMappingURL=04.02.module.js.map