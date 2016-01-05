$(function(){
	var win=$(window).height();
	$('.close').on('click',function(){
		$(this).parents('.mb').hide();
	});
	
	$('.gz').on('click',function(){
		$('div[data='+$(this).attr('data')+']').show();
		var x=(win-$('div[data='+$(this).attr('data')+']').find('.alert').height())/2;
		$('div[data='+$(this).attr('data')+']').find('.alert').css('marginTop',x);
	});
	updata();
	function updata(){
		//在需要时间参数是 yyyy/mm/dd/ hh:mm:ss
		var t = new Date('2015/12/9 23:59:59')- (new Date());
		if(t<=0){
			$('#one').show().addClass('bg');
			$('#two').removeClass('bg');
			$('.two').each(function(index){
				switch (index){
					case 0:$(this).find('.num').find('img').attr('src','images/two.png');
						break;
					case 1:$(this).find('.num').find('img').attr('src','images/three.png');
						break;
					case 2:$(this).find('.num').find('img').attr('src','images/four.png');
						break;
					case 3:$(this).find('.num').find('img').attr('src','images/five.png');
						break;
				}
			});
			clearInterval(key);
		}
	}
	//添零
	var key=setInterval(updata,1000);
	
	
	
});