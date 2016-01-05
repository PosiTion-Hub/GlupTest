$(window).on('load',function(){
	var window_h=$(window).height();
//	var top_w=$('.fixedTitle').height();
	var bottom_w=$('.bottomInput').height();
	var index=0;var sumHei = 0;
	var $content = $('.content'), $main = $(".main");
	$main.height(window_h-bottom_w).css('margin','0 0 '+bottom_w+'px 0');
	var mHei = $main.height();
	var key=setInterval(function(){ 
		index++;
		
		var tx='<div class="chengeEle" ><img src="images/XXX_'+(index+1)+'.png" /></div>';
		if(index==8){
			tx='<div class="chengeEle" ><img src="images/XXX_'+(index+1)+'.png" />'
			+'<div class="posi_a"><img src="images/html.gif" /></div></div>';
		}
		if(index==9){
			clearInterval(key);
		}					
		$(tx).appendTo( $content ).fadeIn(1000);
		
		//控制滚动
		setTimeout(function(){
			sumHei+=$('.chengeEle').eq(index-1).find('img').height();
			if( sumHei > mHei ){						
				$content.animate({
					top: -(sumHei-mHei)
				}, 500);						
			}
		},200);
			
	
	},1500);
	
	$('.close').on('click',function(){
		$(this).parents('.red').fadeOut();
	});
	
	$('.redBtns').on('click',function(){
		var _this=$(this);
		_this.addClass('animt');
		setTimeout(function(){
			_this.removeClass('animt');
			window.location.href="http://www.caohua.com/";
		},1000);
	});
	
	$('.main').on('click',' .chengeEle',function(){
		if($(this).index()==7){
			$('.red').show();
			$('.redBox').addClass('bounceIn animated infinite').css('marginTop',(window_h-$('.redBox').height())/2);
			setTimeout(function(){
				$('.redBox').removeClass('bounceIn animated infinite')
			},600);
		}
	});
	
	$('.red,.main').on('touchmove',function(){
		return false;
	});
	
}).on('resize',function(){
	
	
	
});