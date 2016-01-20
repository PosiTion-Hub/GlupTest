var scrollFrom;
$(window).on('load',function(){
	scrollFrom = parseInt(document.body.scrollTop);
	console.log(scrollFrom)
});
(function(z){
	console.log(document.body.scrollTop)
	
	$.fn.scrollTo =function(options){
        var defaults = {
            toT : 0,    //滚动目标位置
            durTime : 500,  //过渡动画时间
            delay : 30,     //定时器时间
            callback:null   //回调函数
        };
        console.log(this.scrollTop)
        var opts = $.extend(defaults,options),
            timer = null,
            _this = this,
            curTop = scrollFrom,//滚动条当前的位置
            subTop = opts.toT - curTop,    //滚动条目标位置和当前位置的差值
            index = 0,
            dur = Math.round(opts.durTime / opts.delay),
            smoothScroll = function(t){
                index++;
                var per = Math.round(subTop/dur);
                if(index >= dur){
                    document.body.scrollTop=t;
                    window.clearInterval(timer);
//                  if(!publicFun.isNull(opts.callback) && typeof opts.callback == 'function'){
//                      opts.callback();
//                  }
                    return;
                }else{
                   document.body.scrollTop=curTop + index*per;
                }
            };
        timer = window.setInterval(function(){
            smoothScroll(opts.toT);
        }, opts.delay);
        return _this;
    };
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
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
	});
	
	z('#lao').click(function(){
		var top=z('#laoxx').offset().top;
		z('body,html').scrollTo({'toT':top});
		
	});
	z('#new').click(function(){
		var top=z('#newxx').offset().top;
		z('body,html').scrollTo({'toT':top});
		
	});
	
	
	z('#register').on('click',function(){
//		z('#login-b')
		setHeight(z('#login-b').show().find('.login'));
	});
	
	//设置弹窗居中
	function setHeight(elment){
		elment.css('margin-top',(_window-elment.height())/2);
	}
	
})(Zepto);
