//不分文件实现module
var strs: Array<any> = ["13720272617", "240717653@qq.com"];
var validators1: { [s: string]: ValidationUtils.StringValidator; } = {};
validators1["Tel"] = new ValidationUtils.TelValidator;//验证手机号
validators1["Email"] = new ValidationUtils.EmailValidator;//验证Email

function showMsg1(): void {
    strs.forEach(s => {
        for (var name in validators1) {
            console.log('"' + s + '"' + (validators1[name].isAcceptable(s)?'匹配':'不匹配') + name);
        }
    })
}

function showMsg2(): void {
    //方法一
    var telObj: ValidationUtils.TelValidator;
    telObj = new ValidationUtils.TelValidator;
    //方法二
    //var telObj = new ValidationUtils.TelValidator;

    var tel: string = "13720272617";
    var flag: boolean = telObj.isAcceptable(tel);//调用TelValidator类的isAcceptable方法

    console.log(flag ? tel + "\t匹配" : tel + "\t不匹配");

    $("#msg2").html(flag?"<span style='color:red'>"+tel+"匹配</span>":"<span>"+tel+"\t不匹配</span>")
}
$(function () {
    showMsg1();
    showMsg2();
})