//typescript类型比较
//1.类型比较
interface Named { name: string; }
var x: Named;
//判断这个y的是{name:string;location:string;}
var y = { name: "Alice", location: "Wuhan" };
x = y;

var items = [1, 2, 3];
//不压迫强迫这些额外参数
items.forEach((item, index, array) => console.log(item));
items.forEach((item) => console.log(item));

var k = () => ({ name: 'Alice' });
var z = () => ({ name: 'Alice', location: 'Wuhan' });
k = z;
//z = k;//这个k()方法缺少了location属性，所以赋值给z()方法会报错
