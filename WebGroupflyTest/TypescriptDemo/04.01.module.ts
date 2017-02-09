/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="04.01.01validation.ts" />
/// <reference path="04.01.02zipcodevalidator.ts" />
/// <reference path="04.01.03lettersonlyvalidator.ts" />

//分多个ts文件实现module
//Splitting Across Files分割跨文件

//声明一个数组
var strings = ['Hello', '8855', '101', '556677'];

//使用这个验证
var validators: { [s: string]: Validation.StringValidator; } = {};
validators['Zip Code'] = new Validation.ZipCodeValidator();//这个验证邮政编码
validators['Letters Only'] = new Validation.LettersOnlyValidator();//这个验证英文字母

function showMsg(): void {
    //显示每个字符串是否通过每个验证
    strings.forEach(s => {
        for (var name in validators) {
            console.log('"' + s + '"' + (validators[name].isAcceptable(s) ? 'mathes' : 'does not match') + name);
            $("#msg1").html('"' + s + '"' + (validators[name].isAcceptable(s) ? 'mathes' : 'does not match') + name);
        }
    })
}

$(document).ready(function () { showMsg(); })