/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());
var employee = new Employee();
employee.funllName = "Long Long";
if (employee.funllName) {
    console.log(employee.funllName);
}
//2.在class使用constructor构造器
var UserInfo = (function () {
    //默认构造方法
    function UserInfo(msg) {
        this.username = msg; //从构造方法传一个用户字符串
    }
    UserInfo.prototype.getUserInfo = function () {
        return "welcome " + this.username;
    };
    return UserInfo;
}());
function printMsg() {
    var resMsg = "";
    var g = new UserInfo("blank");
    resMsg = g.getUserInfo();
    return resMsg;
}
$(function () {
    var result = printMsg();
    $("#msg").html("<span style='color:green;'>" + result + "<span>");
    //console.log(result);
});
//3.在class使用super关键字
var Person = (function () {
    function Person(paramVal) {
        this.userName = paramVal;
    }
    Person.prototype.getPersonInfo = function (age) {
        if (age === void 0) { age = 120; }
        return this.userName + "\n" + age;
    };
    return Person;
}());
var Student1 = (function (_super) {
    __extends(Student1, _super);
    function Student1(username) {
        return _super.call(this, username) || this;
    }
    Student1.prototype.getPersonInfo = function (age) {
        if (age === void 0) { age = 100; }
        var superMsg = _super.prototype.getPersonInfo.call(this, age);
        return this.userName + '\n' + age + "岁\n\t\t默认信息：" + superMsg;
    };
    return Student1;
}(Person));
var Student2 = (function (_super) {
    __extends(Student2, _super);
    function Student2(username) {
        return _super.call(this, username) || this;
    }
    Student2.prototype.getPersonInfo = function (age) {
        if (age === void 0) { age = 120; }
        var superMsg = _super.prototype.getPersonInfo.call(this, age);
        return this.userName + '\n' + age + "岁\n\t\t默认信息：" + superMsg;
    };
    return Student2;
}(Person));
var stu1 = new Student1("周伯通");
var stu2 = new Student2("老毒物");
var stuMsg1 = stu1.getPersonInfo();
var stuMsg2 = stu2.getPersonInfo(80);
$(function () {
    $("#msg1").html("<span style='color:red'>" + stuMsg1 + "</sapn>");
    $("#msg2").html("<span style='color:green'>" + stuMsg2 + "</sapn>");
});
//4.在class使用public/private关键字
var MyAnimal = (function () {
    function MyAnimal(theName) {
        this.theName = theName;
        this.name = theName;
    }
    MyAnimal.prototype.getMsg = function (name) {
        return this.name = name;
    };
    return MyAnimal;
}());
//犀牛
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "犀牛") || this;
    }
    Rhino.prototype.getMsg = function (name) {
        return name;
    };
    return Rhino;
}(MyAnimal));
//员工
var Employees = (function () {
    function Employees(theName) {
        this.name = theName;
    }
    return Employees;
}());
var animal = new MyAnimal("山羊"); //Goat山羊
var retMsg1 = animal.getMsg("鹿");
var rhino = new Rhino();
var employees = new Employees("洪七公");
animal = rhino;
//animal = employees;//不能通过
$(function () {
    $("#msg3").html("<sapn style='color:red'>" + retMsg1 + "</span>");
});
//5.在class使用高级技巧
//构造函数
//声明一个类，实际上是在同一时间创建多个声明。第一个是类的实例的类型
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello," + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    return Greeter;
}());
Greeter.standardGreeting = "Hello,there";
var greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
//# sourceMappingURL=03.class.js.map