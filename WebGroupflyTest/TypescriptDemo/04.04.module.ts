//引入validation文件，前面这个用了module块关键字定义ts文件，需要用refernce与path引入
import validation = require("./04.04.01Validation");
import emailValidator = require('./04.04.02EmailValidation');
import telValidator = require('./04.04.03TelValidation');

function showMsg1(): void {
    //方法一
    var telObj = new telValidator();
    var tel: string = "13720272617";
    var flag: boolean = telObj.isAcceptable(tel);

    console.log(flag ? tel + "匹配" : tel + "\t不匹配");
    $("#msg1").html(flag ? "<span style='color:red'>" + tel + "匹配</span>" : "<span>" + tel + "\t不匹配</span>");
}

$(function () {
    showMsg1();
})

/*
注意：4.3 和 4.4 不使用 Module, 如果我们在 typescript 使用了 module 函数，则生成的代码在
浏览器端执行时，需要有一些 script loader 的支持。对于浏览器端代码，我们一般生成 amd 风
格的代码，所以需要找一个支持 amd 的库放在前端, 我这里首选的是 AMD 这样的库有很多，比如
1. RequireJS
2. Nodules
3. JSLocalnet
4. curl.js
*/