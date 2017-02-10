var x;
//判断这个y的是{name:string;location:string;}
var y = { name: "Alice", location: "Wuhan" };
x = y;
var items = [1, 2, 3];
//不压迫强迫这些额外参数
items.forEach(function (item, index, array) { return console.log(item); });
items.forEach(function (item) { return console.log(item); });
var k = function () { return ({ name: 'Alice' }); };
var z = function () { return ({ name: 'Alice', location: 'Wuhan' }); };
k = z;
//z = k;//这个k()方法缺少了location属性，所以赋值给z()方法会报错
//# sourceMappingURL=09.type_compatibility.js.map