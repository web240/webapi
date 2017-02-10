//typescript声明合并
//1.合并interface使用
/**
* Merging Interfaces
* 合并接口..
* 最简单的，也许是最常见的，类型声明合并是合并接口。将两个相同的接口合并在一块.
*/
interface Box {
    height: number;
    width: number;
}
interface Box {
    scale: number;
}
var box: Box = { height: 5, width: 6, scale: 10 };
interface Document {
    createElement(tagName: any): Element;
}
interface Document {
    createElement(tagName: string): HTMLElement;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
}
/**
* Merging Interfaces
* 合并接口..
*/
var box = { height: 5, width: 6, scale: 10 };


//2.合并module使用
/**
* Merging Modules
* 合并块.
*要合并的价值，在每一个网站的声明，如果一个模块已经给定名称存在，它进一步采取现有的
模块
*并添加第二个模块第一的出口成员扩展。
*/
module MAnimals {
    export class Zebra { }
} module MAnimals {
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}
//---这个 MYAnimals 块等同上面两个 module
module MYAnimals {
    export interface Legged { numberOfLegs: number; }
    export class Zebra { }
    export class Dog { }
}
/**
* 模块合并的这种模式是一个有用的起点，但要得到我们还需要了解同非成员国导出会发生什么
更完整的场景画面。
* 非导出成员只有原来的（未合并）模块中可见,这意味着合并后，合并的成员，来自其他声明无
法看到非成员导出
*/
module myAnimal {
    var haveMuscles = true;
    export function animalsHaveMuscles() {
        return haveMuscles;
    }
}
module myAnimal {
    export function doAnimalsHaveMuscles() {
        //return haveMuscles; // 这里这个值是不可以返回.
    }
}
/**
* Merging Modules with Classes, Functions, and Enums
* 合并模块与类，函数和枚举
* 模块具有足够的灵活性，以也与其它类型的声明合并。要做到这一点，该模块声明必须遵循的
声明，将与合并。
* 由此产生的声明有两种申报类型的属性。在 typescript 使用这个性能来模拟一些在JavaScript 模式以及其它的编程语言
*/
class Album {
    label: Album.AlbumLabel;
}
module Album {
    export class AlbumLabel { }
}