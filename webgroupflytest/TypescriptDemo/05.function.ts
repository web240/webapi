function add(x: number, y: number): number {
    return x + y;
}

var myAdd1 = function (x: number, y: number): number { return x + y; }

//现在我们已经输入的功能，让我们写了完整类型的功能出来通过查看每件功能类型
var myAdd2: (x: number, y: number) => number = function (x: number, y: number): number { return x + y; }
var number3 = myAdd2(1, 3);

$(function () {
    var number1 = add(1, 2);
    var number2 = myAdd1(1, 2);
    $("#msg1").html("<span style='color:red'>" + number1 + "</span>");
    $("#msg2").html("<span style='color:red'>" + number2 + "</span>");
    $("#msg3").html("<span style='color:red'>" + number3 + "</span>");
})



//2.函数其余参数
/**
* 一、function 没有返回值，却返回了,虽然在写 function 的的时候不报错，调用的时候就报
Error
* 不像 JavaScript 中，在打字稿每参数的函数被假定为所要求的功能。这并不意味着它不是一
个“空”值，
* 而是，当函数调用编译器将检查该用户已经提供了对每个参数的值。编译器还假定这些参数是
将被传递给函数的唯一参数。
* 总之，参数的函数的数目必须匹配的参数的函数需要的数量。
*/
function buildName1(firstNmae: string, lastName: string) {
    return firstNmae + " " + lastName;
}
//var result1 = buildName1("Bod");//error, too few parameters
//var result2 = buildName1("Bob", "Adams", "Sr.");//error,too many parameters
var result3 = buildName1("Bob", "Adams");


/**
* Rest parameters
* 其余的参数
*在 JavaScript 中，每一个参数被认为是可选的，用户可以不用管它，因为他们认为合适的。当
他们这样做，他们认为是不确定的。
*我们可以通过使用得到打字稿这个功能'？“旁边的参数，我们想要可选。例如，我们说，我们要的姓氏是可选：
*/
function buildName2(firstName: string, lastName?: string) {
    if (lastName) { return firstName + " " + lastName; } else { return firstName; }
}

var result1 = buildName2("Bob");
//var result2 = buildName2("Bob", "Adams", "Sr.");//error,too maney parameters
var result3 = buildName2("Bob", "Adams");

/**
* 必需，可选和默认参数都有一个共同点：他们大约在同一时间谈论一个参数。有时候，你想与
多个参数的工作作为一个群体
* ，或者你可能不知道有多少参数的函数将最终取,在 JavaScript 中，你可以使用的参数变量，
它是每一个函数体中可见
* 在 TypeScript：您可以收集这些参数汇集成一个变量
*/
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName3("Joseph", "Samuel", "Lucas", "Mackinzie");

/**
* Rest parameters
* 其余的参数都被视为可选参数无边号码。你可能会离开他们，或者你想要的。编译器将建立你
的下省略号（...）
* 后给予的名称传递给函数的参数数组，允许你使用它在你的函数
*/
function buildName4(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
var buildNameFun: (fname: string, ...rest: string[]) => string = buildName4;



//3.函数this关键字
/**
* this 的使用..
*在 JavaScript，this 的变量一个函数被调用的变量。这使得它成为非常强大和灵活的功能，
*但它是在总是具有了解，一个功能被执行的情况下的成本。这可以是出了名的混乱，例如，当一
个函数被用作一个回调。
*/
function getMeMsg1(): void {
    var suits1 = ["hearts", "spades", "clubs", "diamonds"];

    var deck1 = {
        suits: suits1, cards: Array(52), createCardPicker: function () {
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            }
        }
    }
    var cardPicker1 = deck1.createCardPicker();
    var pickedCard1 = cardPicker1();
    console.log("card1: " + pickedCard1.card + " of " + pickedCard1.suit);
}

/**
* 我们可以通过确保修复此功能被绑定到正确的'this'之前，我们返回函数供以后使用。这样一
来，
* 不管如何其以后使用时，它仍可以看到原来的“甲板”对象
* 为了解决这个问题，我们切换函数表达式使用 lambda 语法（（）=>{}），而不是 JavaScript
函数表达式。
* 这将自动捕捉“这个”可被创建，而不是被调用时，它的功能时：
*/
function getMeMsg2(): void {
    var deck2 = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            //使用lambda表达式去捕捉this用法
            return () => {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                console.log(this.suits[pickedSuit]);
                console.log(pickedCard % 13);
                return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
            }
        }
    }
    var cardPicker2 = deck2.createCardPicker();
    var pickedCard2 = cardPicker2();
    console.log("card2: " + pickedCard2.card + " of " + pickedCard2.suit);
}

$(function () { getMeMsg2(); })

/**
*JavaScript 是本质上是一种非常好的动态的语言。这并意味都通用的一个 JavaScript 函数返
回基于对传入的参数的形状不同类型的对象。
*/
var suits = ["hearts", "spades", "clubs", "diamonds"];
//实例一
function getThisMsg1(): void {
    function pickCard1(x): any {
        //判断这个x是不是object/array
        if (typeof x == "object") {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }

    var myDeck1 = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];

    var pickedCard1 = myDeck1[pickedCard1(myDeck1)];
    console.log("card:" + pickedCard1.card + " of " + pickedCard1.suit);

    var pickedCard2 = pickCard1(15);
    console.log("card:" + pickedCard2.card + " of " + pickedCard2.suit);
}

//实例二
function getThisMsg2(): void {
    function pickCard(x: { suit: string; card: number; }[]): number;
    function pickCard(x: number): { suit: string; card: number; };
    function pickCard(x): any {
        if (typeof x == "object") {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }

    var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];

    var pickedCard1 = myDeck[pickCard(myDeck)];
    console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

    var pickedCard2 = pickCard(15);
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
}
$(function () {
    getThisMsg2();
});