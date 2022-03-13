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

});