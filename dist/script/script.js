$(function(){
    // show color option div when click on the gear
    $('.gear-check').click(function(){
      $('.color-option').fadeToggle();
      });
    //change theme color on click
    var colorli =$(".color-option ul li");
    colorli
     .eq(0).css('backgroundColor','#009AFF');

   colorli.click(function(){
     $('link[href*="theme"]').attr("href",$(this).attr("data-value"));
  });
});
