//声明一个Shapes块别名
var Shapes;
(function (Shapes) {
    //三角形
    var Polygons;
    (function (Polygons) {
        var Triangle = (function () {
            function Triangle(strName) {
                this.side = 3;
                this.theName = strName;
            }
            //计算三角形面积 返回any
            Triangle.prototype.getTriangleArea = function (side) {
                return this.theName + this.side * side;
            };
            return Triangle;
        }());
        Polygons.Triangle = Triangle;
        //正方形
        var Square = (function () {
            function Square(strName) {
                this.side = 8;
                this.theName = strName;
            }
            //计算正方形面积
            Square.prototype.getSquareArea = function (side) {
                return this.theName + this.side * side;
            };
            return Square;
        }());
        Polygons.Square = Square;
    })(Polygons = Shapes.Polygons || (Shapes.Polygons = {}));
})(Shapes || (Shapes = {}));
//# sourceMappingURL=04.05.01Shapes.js.map