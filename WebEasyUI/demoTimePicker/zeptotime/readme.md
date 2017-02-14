时间选择插件mtimer使用说明
依赖的js库：zepto.js
使用方法：
1.在页面上引入js文件和css文件
	<link rel="stylesheet" href="zepto.mdatetimer.css">
<script src="zepto.js"></script>
<script src="zepto.mdatetimer.min.js"></script>
2.html代码中使用input作为输入框，为防止手机上弹出软件盘，设置readonly属性
<input type="text" id="picktime" value="" readonly>
3. 初始化插件：$('#picktime').mdatetimer(config);
配置项config为一个js对象，所包含的属性及说明如下：
mode : 1, //时间选择器模式：1：年月日，2：年月日时分（24小时），3：年月日时分（12小时），4：年月日时分秒。默认：1
format : 2, //时间格式化方式：1：2015年06月10日 17时30分46秒，2：2015-05-10  17:30:46。默认：2
years : [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017], //年份数组
nowbtn : true, //是否显示现在按钮
onOk : null,  //点击确定时添加额外的执行函数 默认null
onCancel : null, //点击取消时添加额外的执行函数 默认null

使用示例请参考demo.html
