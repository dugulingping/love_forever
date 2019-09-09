var wow = new WOW({animateClass: 'animated',});
wow.init();
layui.use(['layer', 'util'], function () {
    var $ = layui.$,
    	layer = layui.layer,
        util = layui.util;
    $(window).load(function () {
        $("#loading").fadeOut(500);
        new WOW().init();
    })
    $('.next').click(function () {
        $('html,body').animate({
            scrollTop: $('#section1').outerHeight() + 1
        }, 600);
    });
    $('#menu').on('click', function () {
        var mark = $(this).attr('data-mark');
        if (mark === 'false') {
            $(this).removeClass('menu_open').addClass('menu_close');
            //open
            $('#navgation').removeClass('navgation_close').addClass('navgation_open');
            $(this).attr({ 'data-mark': "true" });
        } else {
            $(this).removeClass('menu_close').addClass('menu_open');
            //close
            $('#navgation').removeClass('navgation_open').addClass('navgation_close');
            $(this).attr({ 'data-mark': "false" });
        }
    });
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$('#back-top').fadeIn(1000);
		} else {
			$("#back-top").fadeOut(1000);
		}
	});
	var ran = function(min,max){
		return (Math.floor(Math.random()*(max-min)+min));
	}
	$(document).ready(function(){
	  $("#cbgp").click(function(){
		  $("#section1").css("background-image","url(https://bing.biturl.top/?resolution=1920&format=image&index="+ran(0,6)+"&mkt=zh-CN)");
	  });
	});
	$("#xjx").click(function(){
		var p1 ='{\"p1\":[{\"title\":\"我们已经走过了\",\"connet\":\"不知不觉中，我们带着我们的爱情已经走了这么久了~\",\"date\":\"2019-06-06 00:00:00\"},{\"title\":\"我们已经认识了\",\"connet\":\"不可思议十三亿分之一，真的好幸运能遇到你~ \",\"date\":\"2019-05-06 00:00:00\"},{\"title\":\"距上次见面\",\"connet\":\"想你，想你，越来越想你~ 也期待下次见面~\",\"date\":\"2019-07-03 18:00:00\"}]}';
		obj = JSON.parse(p1);
		var random = ran(0,3);
		oldtime = obj.p1[random].date;
		console.log(oldtime);
		document.getElementById("p1_title").innerHTML = obj.p1[random].title;
		document.getElementById("p1_connet").innerHTML = obj.p1[random].connet;
	});
	
});

//countout
layui.use('util', function(){
  var util = layui.util;
  var endTime = new Date(2099,1,1).getTime(), 
  serverTime = new Date().getTime(); 
   
  util.countdown(endTime, serverTime, function(date, serverTime, timer){
    var str = date[0] + '天' + date[1] + '时' +  date[2] + '分' + date[3] + '秒';
    layui.$('#test').html('距离2099年1月1日还有：'+ str);
  });
});
//计时器
var oldtime = '2019-06-06 00:00:00'
timer(oldtime);
var ss = setInterval(function(){timer(oldtime);}, 1000);
function timer(oldtime) {
	var time_dis = function (direct_time) {
		var now = Date.parse(new Date());//当前时间的时间戳
		var start = Date.parse(new Date(direct_time));//指定时间的时间戳
		var time_dis = now - start;//计算时间戳的差
	
		this.days=Math.floor(time_dis/(24*3600*1000));
		//计算出小时数
		var leave1=time_dis%(24*3600*1000);//计算天数后剩余的毫秒数
		this.hours=Math.floor(leave1/(3600*1000));
		//计算相差分钟数
		var leave2=leave1%(3600*1000);//计算小时数后剩余的毫秒数
		this.minutes=Math.floor(leave2/(60*1000));
		//计算相差秒数
		var leave3=leave2%(60*1000);//计算分钟数后剩余的毫秒数
		this.seconds = leave3/1000;
		return this.days+"/"+this.hours+"/"+this.minutes+"/"+this.seconds;
	}
	var timespan = new time_dis(oldtime);
	var x = document.getElementById("timeout");
	//=timec.days+" 天 "+timec.hours+" 时 "+timec.minutes+" 分 "+timec.second+" 秒";
  x.innerHTML="<div><span>Days</span>"  + timespan.days + "</div>" + "<div><span>Hours</span>" + timespan.hours + "</div>" + "<div><span>Minutes</span>" + timespan.minutes + "</div>" + "<div><span>Seconds</span>" + timespan.seconds + "</div>";

}
// "<div><span>Years</span>" + timespan.years + "</div>" + "<div><span>Months</span>" + timespan.months + "</div>" + 
