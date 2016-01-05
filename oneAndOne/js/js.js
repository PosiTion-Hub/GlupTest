$(window).on('load',function(){
	var _window=$(window).height();//
	$('.getJl').width($('body').width()*0.2);
	//获奖名单滚动
	var gunD=$('#gName');
	var gunD_h=gunD.height();
	var u=window.location.href;
	gunD.html(gunD.html()+gunD.html());
	var m=0;
	setInterval(function(){
		gunD.css('top',m--);
		if(-m>gunD_h){
			m=0;
		}
	},30);
	//勾选折扣券
	var checked=$('.zk a');
	checked.tap(function(){
		if($(this).attr('checked')=='false'){
			checked.find('img').attr('src','images/line.png')
			$(this).find('img').attr('src','images/check.png');
			checked.attr('checked','false');
			$(this).attr('checked','true' );
			var xx=$(this).attr('data');
			pay_num.hasClass('color_active');
			var nb=0;
			pay_num.each(function(){
				if($(this).hasClass('color_active')){
					nb=parseInt($(this).html());
					console.log(nb,111)
					if($(this).find('input').size()>0){
						nb=$(this).find('input').val();
						nb=nb==''?0:nb;
					}
					
				}
			});
			$('#chb').html(nb);
			$('#rmb').html(xx*nb||nb);
			
		}else{
			$(this).find('img').attr('src','images/line.png');
			$(this).attr('checked','false');
		}
	});
	
	
	//点击选中充值金额
	var pay_num=$('.pay_num').find('td');
	pay_num.tap(function(){
		var che=$('.zk').find('a[checked="true"]');
		var num=parseInt($(this).html());
		var x;
		if(che){
			var zk=che.attr('data');
			x=num*zk;
		}
		$(this).addClass('color_active').siblings().removeClass('color_active').parents('tr').siblings().find('td').removeClass('color_active');;
		if($(this).hasClass('td_last')){$('#chb').html(0);$('#rmb').html(0);return;}
		$('#chb').html(num);
		$('#rmb').html(x||num);
		
	});
	
	
	//检测input
	$('.td_last').children('input').on('input',function(){
		var ptt=/^[0-9]*$/;
		var che=$('.zk').find('a[checked="true"]');
		var num=$(this).val();
		if(ptt.test(num)&&num.length<=5){
			if(che.size()>0){
				$('#chb').html(num);
				$('#rmb').html(che.attr('data')*num);
				return;
			}
			$('#chb').html(num*10);
			$('#rmb').html(num);
		}else{
			$(this).val('');
			$('#chb').html(0);
			$('#rmb').html(0);
		}
	});
	
	//任务选项卡
	$('.taskBtns div').tap(function(){
		var n=$(this).index();
		var tab=$('.taskTab-1');
		if(!n){
			$(this).find('img').attr('src','images/newhand_b.png');
			$(this).siblings('div').find('img').attr('src','images/daily_a.png');
			tab.eq(n).show()
			tab.eq(1).hide();
			return;
		}
		$(this).find('img').attr('src','images/daily_b.png');
		$(this).siblings('div').find('img').attr('src','images/newhand_a.png');
		tab.eq(n).show()
		tab.eq(0).hide();
	});
	
	//抽奖
	var $ele=$('.luck_box').children('div').not('.luck_b');	
	var cur=0;  //控制切换样式
	var ctrl=0,ride=0; //控制暂停
	var Key;	//开关计时器的钥匙
	var time=190;//转动的初始值
	var price=7; //从0-8 给定中奖位置
	
	function bgMove(){
		var Key=setTimeout(function(){
			cur++;
			ctrl++;
			cur=cur>=$ele.size()?0:cur;
			$ele.eq(cur).addClass('bg').siblings().removeClass('bg');		
			switch(ctrl%48){
			    case 8: time = 120; break;
			    case 16: time = 80; break;
			    case 23: time = 50; break;
			    case 35: time = 100; break;
			    case 40: time = 210; break;
			}
			if(ctrl==(48*ride+price)){
				clearTimeout(Key);
				$('#start').attr('state',0);
				return;
			}
			bgMove();
		},time);
	}
	$('#start').tap(function(){
		if($(this).attr('state')=='1'){;return;}
		$(this).attr('state',1);
		bgMove();
		ride++;
	});
	
	
	
	
	//设置弹框居中
	function SetHeight(e){
		e.css('marginTop',(_window-e.height())/2);
	}
	//关闭弹框和蒙版
	$('.eixt,.ext').tap(function(){
		$(this).parents('.mb').hide();
	});
	//点击登录按钮
	$('#Lgin').tap(function(){
		$('#login-b').show();
		SetHeight($('#login-b').find('.login'))
	});
	//点击显示获奖记录
	$('.JL').tap(function(){
		$('#jl').show();
		SetHeight($('#jl').find('.content-b'))
	});
	//获奖记录切换
	$('.Btns div').tap(function(){
		var n=$(this).index();
		var tab=$('.content-j');
		if(!n){
			$(this).find('img').attr('src','images/title_task_b.png');
			$(this).siblings('div').find('img').attr('src','images/title_prize_a.png');
			tab.eq(n).show()
			tab.eq(1).hide();
			return;
		}
		$(this).find('img').attr('src','images/title_prize_b.png');
		$(this).siblings('div').find('img').attr('src','images/title_task_a.png');
		tab.eq(n).show()
		tab.eq(0).hide();
	});
	
	
	//点击显示分享按钮
	$('#share').tap(function(){
		$('#share-b').show();
		SetHeight($('#share-b').children('.share'));
	});
		
	//分享
	$('#qzone').on('click',function(){
		var xx='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+u+'&title=ch&pics=ch&summary=ch';
		window.location.href=xx;
	});
	$('#sina').on('click',function(){
		var xx='http://service.weibo.com/share/share.php?title=草花手游中心是草花互动专为玩家打造的移动游戏平台...&url='+u;
		window.location.href=xx;
	});
	
	$('#weibo').on('click',function(){
		var xx='http://share.v.t.qq.com/index.php?c=share&a=index&title=%20&url='+u;
		window.location.href=xx;
	});
	$('#weichat').on('click',function(){
		$('.code_t').show();
		$('.code_t').height($('.code_t').width());
		SetHeight($('.code_t'));
	});
});