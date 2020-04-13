$(document).ready(function()
	{

		$(window).scroll(function(){
		
if(($(this).scrollTop() > $(".top").offset().top) && $(".top").css('position')=='static') //fixed top bar
			{
			$(".top").css("position","fixed");	
	

		
			$(".top").css({"background-color":" #E1FED4;","margin-top":"0px"}); //adding color
		//	$("nav").css("margin-top","11%");

		//	$(".logo ,.text").hide();
			$(".top").css({"margin-top" : "-131px"});	
			
			$(".topbar").animate(
			{
				right : "0%"
			
				});

			
			} //end if	
					
	
	else if( $(window).scrollTop() <= '69') 
	 // else if ($(window).scrollTop() <= $(".top").offset().top)	
		{
			
			$(".logo ,.text").fadeIn("slow");
	$(".top").css({"position":"static","background-color":" #E1FED4;"});
			
			$(".top").css({"margin-top" : "7px"});	

			$("nav").css("margin-top","0");
			
					}


			if($(window).scrollTop()=="0")
			{$(".topbar").animate(
			{
				right : "30%"
			
				});


				
				}
	var off = $(".top").offset().top;
	var off = $(window).scrollTop();
	});//end scroll	
	}); //end ready
	

