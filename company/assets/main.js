$(document).ready(function(){


    var typed  = new Typed('#type'  ,{
strings : ["", "Hello", "This is ","SUDODEVS"],
backspeed : 40,
typeSpeed : 90,
loop : false


})


  setTimeout(
  function()
  {
    //do something special
      $("#navicon").css("visibility","visible").fadeIn("fast");
  }, 000);



$(".terminal").removeClass(".logo");
$(".terminal").addClass(".activate");


                    $("#navicon").click(function(){


                    goto(4);

                    });


                    $(".none").click(function(){
                    goto(1);

                    });


                    $(".nthree").click(function(){

                    goto(3);

                    });


                    $(".ntwo").click(function(){
                    goto(2);

                    });


                    $(".home").click(function(){
                    goto(0);

                    });











});
