;(function(z){
	var u=window.location.href;
	var _window=window.innerHeight;
	
	z('#regedit').click(function(){window.location.href='http://member.caohua.com/Wap/Reg.aspx';});
	z('#share').click(function(){
		z('#share-b').show();
		setHeight(z('#share-b').find('.share'));
	});
	
	z('#qq').click(function(){
		var xx='http://connect.qq.com/widget/shareqq/index.html?url='+u+'&desc=&title=&summary=&pics=&flash=&site=&style=201&width=32&height=32&showcount=';
		window.location.href=xx;
	});
	
	z('#qzone').click(function(){
		var xx='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+u+'&title=ch&pics=ture&summary=ch';
		
		window.location.href=xx;
	});
	z('#weibo').click(function(){
		var xx='http://share.v.t.qq.com/index.php?c=share&a=index&title=%20&url='+u;
		window.location.href=xx;
	});
	z('#sina').click(function(){
		var xx='http://service.weibo.com/share/share.php?title=草花手游中心是草花互动专为玩家打造的移动游戏平台...&url='+u;
		window.location.href=xx;
	});
	z('#weichat').click(function(){
		$('#code_t').show();
		setHeight($('#code_t'));
	});
	
	$('.mb').on('click',function(e){
		if(e.target.tagName!='IMG'){
			$('#code_t').hide();
		}
	});
	
	
	
	
	z('.exit').click(function(){
		$(this).parents('.mb').hide();
		z('body,html').css('overflow','auto');
	});
		
	z('.rest').on('click',function(){
		z('#jilu').show();
		var ele=z('#jilu').find('.tab');
		var h=ele.height()>_window*0.5?_window*0.5:ele.height();
		
		ele.height(h);
		
		setHeight(z('#jilu').find('.content'));
	});
	
	z('.mb').on('touchstart,touchmove',function(e){
		e=e.srcElement||e.target;
		if(z(e).hasClass('mb')){
			return false;
		}
	});
	
	
	
	z('#tellme').on('click',function(){
		z('#tm').show();
		var ele=z('#tm').find('.scroll');
		var h=ele.height()>_window*0.5?_window*0.5:ele.height();
		
		ele.height(h);
		
		setHeight(z('#tm').find('.content'));
	});
	
	z('#gz').on('click',function(){
		z('#gz_c').show();
		var ele=z('#gz_c').find('.gz_content');
		var h=ele.height()>_window*0.5?_window*0.5:ele.height();
		
		ele.height(h);
		
		setHeight(z('#gz_c').find('.content'));
	});
	
	z('#register').on('click',function(){
		z('body,html').css('overflow','hidden');
		
		
		//z('#login-b')
		setHeight(z('#login-b').show().find('.login'));
	});
	
	z('input').on('focus',function(){
		
	});
	z(window).on('resize',function(){    
   	 	var viewBottom = window.innerHeight;
    	var elment=z('#login-b').find('.login');
    	elment.css('margin-top',(viewBottom-elment.height())/2);
	});

	
	
	
	
	
	
	var pay_num=$('.pay_num').find('td'); //选择金额
			//点击选中充值金额
			pay_num.on('click',function(){
				var num=parseInt($(this).html());
				pay_num.find('input').val('');
				if($(this).find('input').size()>=1) {
					$('#chb').html(0);$('#rmb').html(0);
				}
				$(this).addClass('color_active').siblings().removeClass('color_active').parents('tr').siblings().find('td').removeClass('color_active');;
				if($(this).hasClass('td_last')) return;
				$('#chb').html(num*10);
				$('#rmb').html(num);
			});
	
			
			//检测input
			$('.td_last').children('input').on('input',function(){
				var ptt=/^[0-9]*$/;
				var num=$(this).val();
				if(ptt.test(num)&&num.length<=4){
					$('#chb').html(num*10);
					$('#rmb').html(num);
				}else{
					$(this).val('');
					$('#chb').html(0);
					$('#rmb').html(0);
				}
			});
	
	
	
	
	
	
	
	
	
	//设置弹窗居中
	function setHeight(elment){
		elment.css('margin-top',(_window-elment.height())/2);
	}
	
})(Zepto);


