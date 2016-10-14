// ripple effect
/*jQuery*/

jQuery(document).ready(function($) {
  $("form.common input").focus(function(){
    $(this).parent().addClass("input-focus");

  }).blur(function(){
   $(this).parent().removeClass("input-focus");
  })

});

$(function(){
  var ink, d, x, y;
  $(".ripplelink").click(function(e){
    if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
    }
         
    ink = $(this).find(".ink");
    ink.removeClass("animate");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});
});