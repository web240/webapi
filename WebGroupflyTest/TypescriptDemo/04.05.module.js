//5.module别名使用
var polygons = Shapes.Polygons;
var tg = new polygons.Triangle("三角形面积是：");
var triangleArea = tg.getTriangleArea(3);
var sq = new polygons.Square("正方形的面积是：");
var squareArea = sq.getSquareArea(8);
$(function () {
    $("#msg1").html("<span style='color:red'>" + triangleArea + "</span>");
    $("#msq2").html("<span style='color:red'>" + squareArea + "</sapn>");
});
//# sourceMappingURL=04.05.module.js.map