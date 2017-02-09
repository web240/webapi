//4.import export require关键字
/**
* 不使用 Module,如果我们在 typescript 使用了 module 函数，则生成的代码在浏览器端执行
时，需要有一些 script loader 的支持。
* 对于浏览器端代码，我们一般生成 amd 风格的代码，所以需要找一个支持 amd 的库放在前端。
这样的库有很多
*/
export interface StringValidator {
    isAcceptable(s: string): boolean;
}