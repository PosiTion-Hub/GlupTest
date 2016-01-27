(function($){
	
	
	var u=window.location.href;
	var _window=window.innerHeight;	
	
	var num=$('#num');
	var myDate1=(new Date('2016/2/6 23:59:59')).getTime(); // 充值叠加buff时间
	
	//祭灶王 办年货  时间
	var myDate2_a=(new Date('2016/2/1 23:59:59')).getTime();
	var myDate2_b=(new Date('2016/2/2 23:59:59')).getTime();
	//买衣服 来打折
	var myDate3_a=(new Date('2016/2/2 23:59:59')).getTime();
	var myDate3_b=(new Date('2016/2/6 23:59:59')).getTime();
	var myDate3_c=(new Date('2016/2/8 23:59:59')).getTime();
	var myDate3_d=(new Date('2016/2/13 23:59:59')).getTime();
	var myDate3_e=(new Date('2016/2/17 23:59:59')).getTime();
	
	//春节 开始
	var myDate4_a=(new Date('2016/2/6 23:59:59')).getTime();
	//情人节 开始
	var myDate4_b=(new Date('2016/2/13 23:59:59')).getTime();
	//元宵节 开始
	var myDate4_c=(new Date('2016/2/21 23:59:59')).getTime();
	
	
	//刮刮乐
//	var myDate5_a=(new Date('2016/2/9 23:59:59')).getTime();
	var myDate5_b=(new Date('2016/2/29 23:59:59')).getTime();
	
	
	var btns=$('#list').children('div');
	var tabs=$('.tab1');
	var ggl=$('#gg');
	var imgsrc=$('#title');
	Ctrl();
	setInterval(Ctrl,1000);
	function Ctrl(){
		var curDate=(new Date()).getTime();
		
		
		
		//刮刮乐
		if(curDate>myDate3_c&&curDate<myDate5_b){
			ggl.html(3);
		}
		
		
		
		
		
		console.log(btns)
		
		//活动四  春节
		if(curDate>myDate4_a&&curDate<myDate4_b){
			btns.eq(0).find('img').attr('src','images/btn_c.png');
			btns.eq(1).find('img').attr('src','images/btn_a.png');
			imgsrc.attr('src','images/title2.png');
			tabs.each(function(){
				$(this).hide();
			});
			tabs.eq(1).show();
			
		}
		//活动四  情人节
		if(curDate>myDate4_b&&curDate<myDate4_c){
			
			imgsrc.attr('src','images/title3.png');
			btns.eq(0).find('img').attr('src','images/btn_c.png');
			btns.eq(1).find('img').attr('src','images/btn_c.png');
			btns.eq(2).find('img').attr('src','images/btn_a.png');
			tabs.each(function(){
				$(this).hide();
			});
			tabs.eq(2).show();
			
		}
		//活动四  元宵节
		if(curDate>myDate4_c){
			imgsrc.attr('src','images/title4.png');
			btns.eq(0).find('img').attr('src','images/btn_c.png');
			btns.eq(1).find('img').attr('src','images/btn_c.png');
			btns.eq(2).find('img').attr('src','images/btn_c.png');
			btns.eq(3).find('img').attr('src','images/btn_a.png');
			tabs.each(function(){
				$(this).hide();
			});
			tabs.eq(3).show();
			
		}
		
		// buff时间控制
		if(myDate1<curDate){
			$('.twoH').find('img').attr('src','images/jump2_a.png');
		}
		
		
		
		
		
		
		
		//祭灶王 办年货  时间控制
		if(myDate2_b>curDate){
			$('#oneD').show();
		}else{
			$('#oneD').hide();
		}
		
		
		
		
		
		
		
		
		//买衣服 来打折 控制
		if(myDate3_a<curDate&&myDate3_e>curDate){
			$('#twoD').show().children('img').attr('src','images/huod2.jpg').next('.TwoNum').show();
			//8折
			if(curDate>myDate3_a&&curDate<myDate3_b){
				num.html(8);
				console.log('买衣服 来打折'+8)
			}
			//7.8折
			if(curDate>myDate3_b&&curDate<myDate3_c){
				num.html(7.8);
				ggl.html(5);
				console.log('买衣服 来打折'+7.8);
			}
			//8折
			if(curDate>myDate3_c&&curDate<myDate3_d){
				num.html(8);
				console.log('买衣服 来打折'+8)
			}
			//7.9折
			if(curDate>myDate3_d&&curDate<myDate3_e){
				$('#num').html(7.9);
			}
		}else if(curDate<myDate3_a){

			$('#twoD').show();
		}else{
			$('#twoD').hide();
		}
	}
	
	
	
	
	$('.exit').click(function(){
		$(this).parents('.mb').hide();
		$('body,html').css('overflow','auto');
	});
	
	$('#share').click(function(){
		$('#share-b').show();
		setHeight($('#share-b').find('.share'));
	});
	
	$('#qq').click(function(){
		var xx='http://connect.qq.com/widget/shareqq/index.html?url='+u+'&desc=&title=&summary=&pics=&flash=&site=&style=201&width=32&height=32&showcount=';
		window.location.href=xx;
	});
	
	$('#qzone').click(function(){
		var xx='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+u+'&title=ch&pics=ture&summary=ch';
		
		window.location.href=xx;
	});
	$('#weibo').click(function(){
		var xx='http://share.v.t.qq.com/index.php?c=share&a=index&title=%20&url='+u;
		window.location.href=xx;
	});
	$('#sina').click(function(){
		var xx='http://service.weibo.com/share/share.php?title=草花手游中心是草花互动专为玩家打造的移动游戏平台...&url='+u;
		window.location.href=xx;
	});
	$('#weichat').click(function(){
		$('#code_t').show();
		setHeight($('#code_t'));
	});
	
	$('.mb').on('click',function(e){
		if(e.target.tagName!='IMG'){
			$('#code_t').hide();
		}
	});
	
//	function GetDate(addr,fn){
//		$.ajax({
//			type:"get",
//			url:addr,
//			success:function(data){
//				fn&&fn(data)
//			}
//		});
//	}
	
	//设置弹窗居中
	function setHeight(elment){
		elment.css('margin-top',(_window-elment.height())/2);
	}
	
})(Zepto);
