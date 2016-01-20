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
		z('#code_t').show();
		setHeight(z('#code_t'));
	});
	
	z('.mb').on('click',function(e){
		if(e.target.tagName!='IMG'){
			z('#code_t').hide();
		}
	});
	
	
	
	
	z('.exit').click(function(){
		$(this).parents('.mb').hide();
		z('body,html').css('overflow','auto');
	});
	z('.lq_18').on('click',function(){
		setHeight(z('#six').show().find('.winning').html('<p>您还没有累计签到满8天，请签到满8天后，再领取。</p>').find('.login'));
	});
//	z('.rest').on('click',function(){
//		z('#jilu').show();
//		var ele=z('#jilu').find('.tab');
//		var h=ele.height()>_window*0.5?_window*0.5:ele.height();
//		ele.height(h);
//		setHeight(z('#jilu').find('.content'));
//	});
//	
	z('.mb').on('touchstart,touchmove',function(e){
		e=e.srcElement||e.target;
		if(z(e).hasClass('mb')){
			return false;
		}
	});
	z('#register').on('click',function(){
		setHeight(z('#login-b').show().find('.login'));
	});
	z(window).on('resize',function(){    
   	 	var viewBottom = window.innerHeight;
    	var elment=z('#login-b').find('.login');
    	elment.css('margin-top',(viewBottom-elment.height())/2);
	});

	//
	var index=5;
	z('.font-list').children('div').each(function(n,ele){
		if(n<index){
			z(this).addClass('currBg');
		}
	});
	
	z('.six').on('click',function(){
		if(!$(this).parent().hasClass('year-cur')){return;}
		setHeight(z('#six').show().find('.login'));
	});
	z('.ten').on('click',function(){
		if(!$(this).parent().hasClass('year-cur')){return;}
		setHeight(z('#ten').show().find('.login'));
	});
	//设置弹窗居中
	function setHeight(elment){
		z('html,body').css('overflow','hidden');
		elment.css('margin-top',(_window-elment.height())/2);
	}
	
})(Zepto);


