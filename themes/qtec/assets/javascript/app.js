$(window).scroll(function(){
  if ($(this).scrollTop() > $(this).height()){
    $('.up-top-icon').addClass('active');
  
  }
  else{
    $('.up-top-icon').removeClass('active');
  }
});