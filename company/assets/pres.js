var currentSlide = 0;
var i =$("html").width();
var s=0;

$(document).ready(function(){
    //   $(".navigation li").eq().remove();
      $(".navigation li").css("visibility", "hidden");

      if(currentSlide==0){
        $(".left").css("visibility","hidden");
      }

  $(document).keyup(function(e){

        if(e.keyCode == 39|| e.keyCode==40){
            next();



        }else if(e.keyCode == 38|| e.keyCode==37){
          back();

        }


  });

  $(".larrow").click(function(){

  /*  if(s>0){

        s--;
      window.scrollTo(s* i, 0);
      highlight();
  }

*/
back();
//lert("Left");
  });


  $(".rarrow").click(function(){
             /* if(s<3){
           s++;
               window.scrollTo(s* i, 0);
                 highlight();


        } */
          //alert("Hello");
          next();



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
//  highlight();

}


function goto(n){
  if(n>-1 && n<$('section').length )
    currentSlide = n;


    else return;

    /*  if(currentSlide==0){
          $(".left").css("visibility","hidden");
      }

        else  if(currentSlide==4){
            $(".right").css("visibility","hidden");
          }else{
        $(".right").css("visibility","visible");
          $(".left").css("visibility","visible");

        } */
    
if(n==4){
  $('section').eq(0).addClass('prev');

  $('section').removeClass('active').eq(4).addClass('active').removeClass('prev');
}else{

  $('section').eq(currentSlide-1).addClass('prev');
  $('section').removeClass('active').eq(currentSlide).addClass('active').removeClass('prev');

      highlight();
}




  }


function highlight(){
  //background: white;
//  currentSlide = n;
//alert("Hello");

   $(".navigation li").removeClass('active');
 $(".navigation li").eq(currentSlide).addClass('active');
   $(".navigation li").css("visibility", "visible");


}
