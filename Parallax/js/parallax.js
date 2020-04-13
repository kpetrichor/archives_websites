
$(document).ready(function()
{
	$(window).bind('scroll',function()
	{
		
		parallax();
		
		// Hey this is about the color of links in the navigation	
		sbill();
		ssteve();
		smark();	
		});

	
	
	// ANIMATION NAVIGATION
	$('a.linkOne').click(function()
	{
		
		$('html, body').animate({scrollTop:$('#billgates').offset().top},1000);
		
		return false;

		
	
	});	

// STEVE JOBS 
	
	$('a.link-ssteve').click(function()
	{
		
		$('html, body').animate({scrollTop:$('#stevejobs').offset().top},1000);
		return false;
		
		});	
	
	

	
	// Mark zukerberg
	$('a.link-smark').click(function()
	{
		
		$('html, body').animate({scrollTop:$('#markzukerberg').offset().top},1000);

		//document.write($('#markzukerberg').scrollTop());
		return false;
		
		});	
	
		
	});

function parallax()
{
	


	var scrollPos = $(window).scrollTop();

	
	$('.back-image').css('top' , ((0 - scrollPos) *.2) + 'px');	
// 	$('#background').css('top',((0 - scrollPos) *.2)+'px');
	$('#images').css('top',((0 - scrollPos)* .5)+'px');

	$('#backOne').css('top' , ((0 - scrollPos) * .1) + 'px');			

	}

function sbill()
{
	scrollPos = $(window).scrollTop();
        var first = $('#billgates').offset().top;
	var last = $('#twin').offset().top;

	var k = $('#markzukerberg').scrollTop();

	if(   ((scrollPos + 12) > first)  &&   (scrollPos + 15) < (last))
	{
		$('.linkOne').css('background-color','#2E8DEF');


		
		}
	else 
	{
		$('.linkOne').css('background-color','#303d50');
		
		}

			


	
}

function ssteve()
{
	scrollPos = $(window).scrollTop();
        var first = $('#stevejobs').offset().top;
	var last = $('#backThree').offset().top;

	var k = $('#markzukerberg').scrollTop();

	if(	((scrollPos + 13) > first) && (scrollPos + 15) < last)
	{
		$('.link-ssteve').css('background-color','#a5adb0 ');


		
		}
	else 
	{
		$('.link-ssteve').css('background-color','#303d50');
		
		}

			


	
}


function smark()
{
	scrollPos = $(window).scrollTop();
        var first = $('#markzukerberg').offset().top;
	var last = $('#end').offset().top;

	var k = $('#markzukerberg').scrollTop();

	if(( (scrollPos + 13) > first) && (scrollPos) < last)
	{
		$('.link-smark').css('background-color','#3b5998');


		
		}
	else 
	{
		$('.link-smark').css('background-color','#303d50');
		
		}

			


	
}




	
	
