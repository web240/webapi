/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
//declare var jQuery: (string) => any;
interface IUserInfo {
    userName: string;
    age: any;
}

//获取用户信息
function getUserInfo(user: IUserInfo): string {
    return user.userName += "====" + user.age;
}

//用一个数组对象传user会检查getUserInfo函数方法
var userObj = { userName: '在路上' };
var userObj1 = { userName: '在路上', age: 20 }

$(function () {
    var userinfo: string = getUserInfo(userObj1);
    console.log(userinfo);
});




//2.自选属性 Optional Properties
/**
* Not all properties of an interface may be required.
* Some exist under certain conditions or may not be there at all
*并非需要一个接口的所有属性。在某些条件下的一些存在或可以不存在的。
*这句话说的是：就算你 SquareConfig 接口定义的变量是 color，到调用 createSquare 的时候
你给 color1 变量照样可以取出 z 值来
*这个值只不过是：默认的 newSquare 的 white 值，如果是一样的 color 变量他就会取出你给赋
格对象的 color(red)
*/
interface SquareConfig {
    color?: string;
    width?: number;
}
//--createSquare 返回的对象是 newSquare，所有只能获取 color 和 area 并获取不了 width这个属性的值..
function createSquare(config: SquareConfig): { color: string; area: number }{
    var newSquare = { color: "white", area: 100 };

    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = newSquare.area*config.width
    }
    return newSquare;
}

var mySquare1 = createSquare({ color: "red" });//与接口的变量color一样，此时这个值取出的是默认color=red
//var mySquare2 = createSquare({ color1: "red" });//与接口变量color不一样，此时这个值取出的是默认值color=white
console.log(mySquare1.color + "==" + mySquare1.area);
//console.log(mySquare2.color + "==" + mySquare2.area);
var mySquare3 = createSquare({ color: "yellow", width: 80 });
console.log(mySquare3.color + "==" + mySquare3.area);




//3.javascript的search函数
interface searchFunt {
    (source: string, subString: string): boolean;
}
var mySearch: searchFunt;
mySearch = function (source: string, subString: string) {
    var result = source.search(subString);
    if (result == -1) { return false; } else { return true; }
}

$(function () {
    var source: string = "this is ok";
    var subString1: string = "ok";
    var subString2: string = "not";
    var result: boolean;
    var result1 = mySearch(source, subString1);//从source字符串上找ok,返回true
    var result2 = mySearch(source, subString2);//从source字符串上找not,返回false
    console.log(result1);
    console.log(result2);
})




//4.接收定义Array类型
interface StringArray {
    [index: number]: string;
    //length:number;
}
var myArray: StringArray;
myArray = ["Bob", "Blank"];

$(function () {
    $.each(myArray, function (key, val) { console.log(val); });
})


//5.class实现implements接口
//Class Types(implements)
interface IClock {
    currentTime: Date;
    setTime(d: Date);
}
//实现IClock接口
class Clock implements IClock {
    currentTime: Date;
    constructor(h: number, m: number) { }//构造方法
    setTime(d: Date) { this.currentTime = d; }
}

interface IClock1 {
    new (hour: number, minute: number);
}
class Clock1 {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
var cs: IClock1 = Clock1;
var newClock = new cs(7, 30);
console.log(newClock);




//6.扩展接口Extending Interfaces
//Extending Interfaces
interface IShape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
//接口继承接口，用，分割开多继承
interface ISquare extends IShape, PenStroke {
    sideLength: number;
}
//赋值
var square = <ISquare>{};
square.color = "red";
square.sideLength = 100;
square.penWidth = 50;



//7.混合型Hybrid Types
//计算器
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
var c: Counter;
c(10);
c.interval = 5.0;
c.reset();