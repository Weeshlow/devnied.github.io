$(function(){
	// define reverse jquery function
	jQuery.fn.reverse = [].reverse;
	
	var selected;

	$(".menu a").reverse().each(function(){
		if (window.location.pathname.match("^"+$(this).attr('href')) ){
			$(this).addClass("active");
			selected = $(this);
			return false;
		}
	});
	
	if ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false ){
		$("body").scrollTop(1);
	}
	
	// Email
	$(".mail").attr("href","mai"+"lto"+":mx"+"julien"+"@"+"gmail"+"."+"com");
	
	$( ".back" ).click(function() {
		if (selected){
	  		window.location = selected.attr('href');
	  	}
	});

});