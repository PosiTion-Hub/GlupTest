var _window;
$(window).on('load',function(){
	_window=$(this).height();
	
	
	
	
	
	
	

});


function setHeight(e){
	e.find('.share').css('margin-top',(_window-e.height())/2);
}