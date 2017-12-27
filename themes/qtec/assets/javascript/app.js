// Scroll to TOP icon animation
$(window).scroll(function(){
  if ($(this).scrollTop() > $(this).height()){
    $('.up-top-icon').addClass('active');
  
  }
  else{
    $('.up-top-icon').removeClass('active');
  }
});
// Scroll to TOP on CLICK
$('.up-top-icon').click(function(){
  $('html, body').stop().animate({
    scrollTop:0
  },'slow', 'swing'
    );
});