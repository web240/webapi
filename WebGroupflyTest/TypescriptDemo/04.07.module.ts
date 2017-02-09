//7.module外部模块

/*
在 node.js 中，大多数的任务是由加载一个或多个模块来实现的。我们可以定义自己的.d.ts
文件顶层出口报关单每个模块，但它更方便他们写为一个较大的.d.ts 文件。要做到这一点，我们
使用了模块的引用名，这将提供给一个后来进口
*/
/*
declare module "url" {
    export interface Url {
        protocol?:string;
        hostname?: string;
        pathname?: string;
    }
    export function parse(urlSre: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
    export function nomalize(p: string): string;
    export function join(...paths: any[]): string;
    export var sep: string;
}

//引入node.d.ts文件
import url = require("url");
var myUrl = url.parse("http://www.typescriptlang.org");

$(function () {
    console.log(myUrl);
    $("#msg1").html(myUrl);
})
*/