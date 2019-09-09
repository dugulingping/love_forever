/**
  项目JS主入口
  以依赖layui的layer和form模块为例
**/    
layui.define(['layer', 'form'], function(exports){
  var layer = layui.layer,form = layui.form;
  
  exports('index', {}); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});    
layui.use('element', function(){
  var element = layui.element;
});
layui.use(['jquery', 'layer'], function(){ 
  var $ = layui.$ //重点处
  ,layer = layui.layer;
  
layer.msg('Hello World');
      //改变窗口大小时调整图片大小
    window.onload = resizeImages;
    window.onresize = resizeImages;

    function resizeImages() {
        $(function (e) {
            var screenWeight = document.documentElement.clientWidth;
            var screenHeight = document.documentElement.clientHeight;
            $("[name=pageImg]").css("width", screenWeight).css("height", screenHeight);
            $("#pageUl").css("bottom", screenHeight >> 1);
        });
    }
    var wrap = document.getElementById("wrap");
    var main = document.getElementById("main");
    var hei = document.body.clientHeight;
    wrap.style.height = hei + "px";
    var obj = document.getElementsByTagName("div");
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].className == 'page') {
            obj[i].style.height = hei + "px";
        }
    }




});
