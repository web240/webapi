
//声明一个Shapes块别名
module Shapes {
    //三角形
    export module Polygons {
        export class Triangle {
            side: number = 3;
            theName: string;

            constructor(strName: string) {
                this.theName = strName;
            }
            //计算三角形面积 返回any
            getTriangleArea(side: number): any {
                return this.theName + this.side * side;
            }
        }
    //正方形
        export class Square {
            side: number = 8;
            theName: string;

            constructor(strName: string) {
                this.theName = strName;
            }
            //计算正方形面积
            getSquareArea(side: number): any {
                return this.theName + this.side * side;
            }
        }
    }
}