
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(document).scroll(function() {
  var searchfrom = $('#brand-logo');
  searchfrom.hide();
  window_position = $(window).scrollTop();
  //debuging.innerHTML = window_position; 
  if (window_position >= 193) 
  {
    searchfrom.css('display', 'inline-block');
  }   
  else if (window_position < 193) 
  {

  }

})