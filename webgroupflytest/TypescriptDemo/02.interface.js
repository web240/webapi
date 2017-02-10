/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
//获取用户信息
function getUserInfo(user) {
    return user.userName += "====" + user.age;
}
//用一个数组对象传user会检查getUserInfo函数方法
var userObj = { userName: '在路上' };
var userObj1 = { userName: '在路上', age: 20 };
$(function () {
    var userinfo = getUserInfo(userObj1);
    console.log(userinfo);
});
//--createSquare 返回的对象是 newSquare，所有只能获取 color 和 area 并获取不了 width这个属性的值..
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = newSquare.area * config.width;
    }
    return newSquare;
}
var mySquare1 = createSquare({ color: "red" }); //与接口的变量color一样，此时这个值取出的是默认color=red
//var mySquare2 = createSquare({ color1: "red" });//与接口变量color不一样，此时这个值取出的是默认值color=white
console.log(mySquare1.color + "==" + mySquare1.area);
//console.log(mySquare2.color + "==" + mySquare2.area);
var mySquare3 = createSquare({ color: "yellow", width: 80 });
console.log(mySquare3.color + "==" + mySquare3.area);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
$(function () {
    var source = "this is ok";
    var subString1 = "ok";
    var subString2 = "not";
    var result;
    var result1 = mySearch(source, subString1); //从source字符串上找ok,返回true
    var result2 = mySearch(source, subString2); //从source字符串上找not,返回false
    console.log(result1);
    console.log(result2);
});
var myArray;
myArray = ["Bob", "Blank"];
$(function () {
    $.each(myArray, function (key, val) { console.log(val); });
});
//实现IClock接口
var Clock = (function () {
    function Clock(h, m) {
    } //构造方法
    Clock.prototype.setTime = function (d) { this.currentTime = d; };
    return Clock;
}());
var Clock1 = (function () {
    function Clock1(h, m) {
    }
    return Clock1;
}());
var cs = Clock1;
var newClock = new cs(7, 30);
console.log(newClock);
//赋值
var square = {};
square.color = "red";
square.sideLength = 100;
square.penWidth = 50;
var c;
c(10);
c.interval = 5.0;
c.reset();
//# sourceMappingURL=02.interface.js.map