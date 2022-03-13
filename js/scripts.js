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

});