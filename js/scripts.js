$(document).ready(function(){
  $("div.design").click(function(){
      $(".des_hide").toggle();
      $(".des_show").toggle();
  });

  $("div.development").click(function(){
      $(".dev_hide").toggle();
      $(".dev_show").toggle();
  });

  $("div.product").click(function(){
      $(".product_hide").toggle();
      $(".product_show").toggle();
  });

  $("form").submit(function(){
    var name = $("input#user").val();
    var email = $("input#email").val();
    var text = $("input#textarea").val();

    if($("input#user").val() && $("input#email").val() && $("input#textarea").val !==""){
        alert(name + ", Thankyou for reaching out. We'll get back to you shortly!");
    } else {
        alert("Please fill out the form before submit, Thank you.");
    }
    event.preventDefault();
  });

  $("#work4").hover(function(){
    $("#text4").show();
  });
  $("#work4").mouseleave(function(){
    $("#text4").hide();
  });

  $("#work3").hover(function(){
      $("#text3").show();
  });
  $("#work3").mouseleave(function(){
      $("#text3").hide();
  });

  $("#work2").hover(function(){
      $("#text2").show();
  });
  $("#work2").mouseleave(function(){
      $("#text2").hide();
  });

  $("#work1").hover(function(){
      $("#text1").show();
  });
  $("#work1").mouseleave(function(){
      $("#text1").hide();
  });

  $("#work5").hover(function(){
      $("#text5").show();
  });
  $("#work5").mouseleave(function(){
      $("#text5").hide();
  });

  $("#work6").hover(function(){
      $("#text6").show();
  });
  $("#work6").mouseleave(function(){
      $("#text6").hide();
  });

  $("#work7").hover(function(){
      $("#text7").show();
  });
  $("#work7").mouseleave(function(){
      $("#text7").hide();
  });

  $("#work8").hover(function(){
      $("#text8").show();
  });
  $("#work8").mouseleave(function(){
      $("#text8").hide();
  });

});