/// <reference path="../scripts/typings/jquery/jquery.d.ts" />

class Employee {
    funllName: string;
}
var employee = new Employee();
employee.funllName = "Long Long";
if (employee.funllName) {
    console.log(employee.funllName);
}



//2.在class使用constructor构造器
class UserInfo {
    username: string;
    //默认构造方法
    constructor(msg: string) {
        this.username = msg;//从构造方法传一个用户字符串
    }
    getUserInfo() {
        return "welcome " + this.username;
    }
}
function printMsg(): string {
    var resMsg: string = "";
    var g = new UserInfo("blank");
    resMsg = g.getUserInfo();
    return resMsg;
}
$(function () {
    var result = printMsg();
    $("#msg").html("<span style='color:green;'>" + result + "<span>")
    //console.log(result);
})



//3.在class使用super关键字
class Person {
    userName: string;
    constructor(paramVal: string) {
        this.userName = paramVal;
    }
    getPersonInfo(age: number = 120): string {
        return this.userName + "\n" + age;
    }
}
class Student1 extends Person {
    constructor(username: string) {
        super(username);
    }
    getPersonInfo(age = 100) {
        var superMsg = super.getPersonInfo(age);
        return this.userName + '\n' + age + "岁\n\t\t默认信息：" + superMsg;
    }
}
class Student2 extends Person {
    constructor(username: string) {
        super(username);
    }
    getPersonInfo(age = 120) {
        var superMsg = super.getPersonInfo(age);
        return this.userName + '\n' + age + "岁\n\t\t默认信息：" + superMsg;
    }
}
var stu1 = new Student1("周伯通");
var stu2 = new Student2("老毒物");
var stuMsg1 = stu1.getPersonInfo();
var stuMsg2 = stu2.getPersonInfo(80);
$(function () {
    $("#msg1").html("<span style='color:red'>" + stuMsg1 + "</sapn>");
    $("#msg2").html("<span style='color:green'>" + stuMsg2 + "</sapn>");
})



//4.在class使用public/private关键字
class MyAnimal {
    private name: string;
    constructor(private theName: string) {
        this.name = theName;
    }
    getMsg(name: string): string {
        return this.name = name;
    }
}
//犀牛
class Rhino extends MyAnimal {
    constructor() {
        super("犀牛");
    }
    getMsg(name: string): string {
        return name;
    }
}
//员工
class Employees {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
var animal = new MyAnimal("山羊");//Goat山羊
var retMsg1 = animal.getMsg("鹿");
var rhino = new Rhino();
var employees = new Employees("洪七公");
animal = rhino;
//animal = employees;//不能通过
$(function () {
    $("#msg3").html("<sapn style='color:red'>" + retMsg1 + "</span>");
})



//5.在class使用高级技巧
//构造函数
//声明一个类，实际上是在同一时间创建多个声明。第一个是类的实例的类型
class Greeter {
    static standardGreeting = "Hello,there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello," + this.greeting;
        } else {
            return Greeter.standardGreeting;
        }
    }
}
var greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

var greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";
var greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());