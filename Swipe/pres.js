var currentSlide = 0;

$(document).ready(function(){


  $(document).keyup(function(e){

        if(e.keyCode == 39|| e.keyCode==40){
            next();

        }else if(e.keyCode == 38|| e.keyCode==37){
          back();
        }


  });

$('.slides').swipe({

  swipe:function(event , direction , distance , duration , fingerCount){

        switch(direction){
            case "left":
                next();
                break;

            case "right":
                back();
                break;

        }
  }



});



  initSlides();


});


function initSlides(){

  $('section').eq(currentSlide).addClass('active');


}

function next(){

  goto(currentSlide+1)

}
function back(){

  goto(currentSlide-1)

}


function goto(n){
  if(n>-1 && n<$('section').length )
    currentSlide = n;


    else return;
  $('section').eq(currentSlide-1).addClass('prev');
    $('section').removeClass('active').eq(currentSlide).addClass('active').removeClass('prev');


  }
