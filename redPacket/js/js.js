var yhq;    //中奖的是优惠券
var chb;   //中奖的是草话吧
var none;  //没有中奖
var ts;    //点红包提示
var chai;  //拆红包
var window_h=$(window).height(); //窗口高度
var window_w=$(window).width();	//获取窗口宽度


$(window).on('load',function(){
	yhq=$('#yhq').children('.prize');
	chb=$('#gload').children('.prize');
	none=$('#none').children('.prize');
	ts=$('#ts').children('.ts');
	chai=$('#redAlert').children('.redP');
	setHeight(chai);
	setHeight(yhq);
	setHeight(chb);
	setHeight(none);
	

}).on('resize',function(){
	setHeight(yhq);
	setHeight(chb);
	setHeight(chai);
	setHeight(none);
});

function setHeight(ele){
	ele.css('margin-top',(window_h-ele.height())/2);
}


$(function(){
	$(document).on('selectstart',function(){return false;})
	var redEle=$('.container').children('div');
	console.log(redEle)
	var key;//掉红包计时器
	var key1;// 10s倒计时  计时器
	
	//时间变化
	updata();
	setInterval(updata,1000);
	
	
	
	$('#star').on('click',function(){
		$('.redRain').fadeIn();
	});
	var red_w=window_w*0.1;
	console.log($('.redRain').width())
	redEle.each(function(){
		var radom=Math.random()*($('.redRain').width()-red_w*2)+red_w-30;
		$(this).css({
			'left':radom,
			'top':-(Math.random()*10+180)
		})
	});
	
	//关闭提示弹框
	$('.alert-close').on('click',function(){
		$(this).parents('.alert-t').hide();
	});
	
	//点击登录
	$('.login-img').on('click',function(){
		$('#login').show();
	});
	//关闭登录弹框
	$('#close').on('click',function(){
		$('#login').hide();
	});
	
	
	
	//显示奖励中的退出
	$('.exit').on('click',function(){
		$('html,body').css('overflow','auto');
		$(this).parents('.prize-b').hide();
		$('.redRain').hide();
	});
	//点击开始红包雨
	$('#star').on('click',function(){
		$('html,body').css('overflow','hidden');
		$('.prize-b,.redRain').on('touchmove',function(e){return false;});
		clearInterval(key1);
		$('.redRain').show();
	
		$('#ts').fadeIn();
		
		$('.redTime').html('倒计时：10');
		ts.css('margin-top',(window_h-ts.height())/2);
		goTop();
		Mshi();
		star();
	});
	
		
	//点击掉落的红包
	redEle.on('touchstart click',function(){
		clearInterval(key);
		clearInterval(key1);
		redEle.each(function(){
			$(this).stop().stop().stop();
		});
		
		//拆红包弹窗 显示
		$('#redAlert').fadeIn();
		setHeight(chai);
	});
	
	
	//点击拆红包
	$('#chai').on('click',function(){
		$(this).addClass('animt');
		setTimeout(function(){
			chb.parent().fadeIn();
			setHeight(chb);
			$('#redAlert').fadeOut().find('#chai').removeClass('animt');
		},1000);
		
	});
	
	
	
	
	
	
	// 10秒倒计时
	function Mshi(){
		var x=10;
		$('#ts').fadeOut(3000);
		setTimeout(function(){
			key1=setInterval(function(){
				x--;
				$('.redTime').html('倒计时：'+x);
				if(x==0){
					goTop();
					none.parent().show();
					setHeight(none);
					
				}
			},1000);
		},2000);
	
	}
	
	//退出，失败 再次  红包位置回到底部
	function goTop(){
		clearInterval(key1);
		clearInterval(key);
		redEle.each(function(){
			$(this).css('top',-(Math.random()*10+180));
			$(this).stop().stop().stop();
		});
	}
	

	function star(){
		key=setInterval(function(){
			loop();
		},2000);
	}

	
	function loop(){
			setAnimat();
			setAnimat();
			setAnimat();
	}
	
	
	function setAnimat(){
		redEle.eq(Math.ceil(Math.random()*redEle.length)).animate({'top':window_h+red_w},Math.ceil(Math.random()*2000+1500),'swing',function(){
			$(this).css('top',-(Math.random()*10+180));
		});
	}
	
	
	
	
	function updata(){
		//在需要时间参数是 yyyy/mm/dd/ hh:mm:ss
		var t = new Date(2015,12,4,23,59,59)- (new Date());
		//var t = new Date("12 4,2015 23:59:59")- (new Date());//计算剩余的毫秒数  
        var d = parseInt(t / 1000 / 60 / 60 / 24, 10);//计算剩余的天数  
        var h= parseInt(t / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数  
        var m= parseInt(t / 1000 / 60 % 60, 10);//计算剩余的分钟数  
        var s= parseInt(t / 1000 % 60, 10);//计算剩余的秒数  
	
		$('#h').html(zero(h));
		$('#m').html(zero(m));
		$('#s').html(zero(s));
	}
	//添零
	function zero(num){
		num=num<10?('0'+num):num;
		return num;
	}
	
	
});