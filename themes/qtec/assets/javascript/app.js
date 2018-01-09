// Scroll to TOP icon Visuals animation
$(window).scroll(function(){
  if ($(this).scrollTop() > $(this).height()){
    $('.up-top-icon').addClass('active');
  
  }
  else{
    $('.up-top-icon').removeClass('active');
  }
});
//Logo drop on scroll
$(function(){
  $(window).scroll(function() {

    if($(window).scrollTop() >= 300) {
       $('.logo-s').addClass('scrolled');
     }
    else {
      $('.logo-s').removeClass('scrolled');
    }
  });
});

// Scroll to TOP on CLICK
$('.up-top-icon').click(function(){
  $('html, body').stop().animate({
    scrollTop:0
  },'slow', 'swing'
    );
});