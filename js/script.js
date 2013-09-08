$(document).ready(function(){

	//smoothing animate
	$("nav li").click(function(){
		var href=$(this).find("a").attr("href");
		var pos=$(href).offset().top;//obtain this current <a> distance to the top.
		$("html,body").animate({scrollTop:pos}, 800);
	});



	//back to top
	var backtop = $(".backTop");
	backtop.click(function(){
		$('body, html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});

