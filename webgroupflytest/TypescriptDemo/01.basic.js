/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
//declare var jQuery: (string) => any;
//1.声明一个booolean类型默认值是false
var isFlag = false;
//2.声明一个number类型值
var orderNumber = 100;
//3.声明一个string类型
var userName = "在路上";
//4.数组
//方式一，数据类型后带[]
var list = [1, 2, 3];
//方式二，泛型数组类型 泛型数组
var list1 = [1, 2, 3];
//5.枚举Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c1 = Color.Green;
//默认枚举类型数值从0开始，可以手动设置
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 4] = "Blue";
})(Color1 || (Color1 = {}));
;
var c2 = Color1.Green;
//
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var c3 = Color2[2];
//6.any
var notSure = 4;
notSure = "this is string";
notSure = false;
var list2 = [1, true, "fres"];
list2[1] = 100;
//7.void
function warnUser() {
    console.log("This id void");
}
/****使用 reference 和 path 引入 jquery.d.ts 文件使用 jquery$就不会报错.**/
/// <reference path="../plugins/typescript/typings/jquery.d.ts" />
//返回void
function setTableRowHtml1() {
    var userName = "";
    $("tr").each(function () {
        userName = $(this).find("td:eq(1)").html();
    });
    console.log(userName);
}
//返回string
function setTableRowHtml2() {
    var userName = "";
    $("tr").each(function () {
        userName = $(this).find("td:eq(1)").html();
    });
    return userName;
}
$(function () {
    //setTableRowHtml1();
    var userName = setTableRowHtml2();
    console.log(userName);
});
/****使用 reference 和 path 引入 jquery.d.ts 文件使用 jquery.d.ts 声明的的$，不引就报
错.**/
/// <reference path="../plugins/typescript/typings/jquery.d.ts" />
//var colorList: Array<string> = ["red", "blue", "green", "yellow"];
var colorList = ["red", "blue", "green", "yellow"];
function testArray() {
    $.each(colorList, function (key, val) {
        console.log(key + "=" + val);
    });
    $(colorList).each(function (key, val) {
        console.log(key + "=" + val);
    });
}
function setTableRowColor() {
    $("tr").each(function () {
        $(this).find("td:eq(1)").css({ color: "red", background: "green" });
    });
}
function setTableRowColor1() {
    $("tr").each(function () {
        for (var i = 0; i < colorList.length; i++) {
            if (i == 1) {
                $(this).find("td:eq(1)").css({ color: colorList[i], background: colorList[i + 1] });
            }
        }
    });
}
$(document).ready(function () {
    testArray();
    setTableRowColor();
    //setTableRowColor1();
});
//# sourceMappingURL=01.basic.js.map