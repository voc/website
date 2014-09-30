$(document).ready(function() {
  // fade in event image text
  $('.event').hover(
    function(){
       $(this).find('.captions').slideDown(500); //.fadeIn(500)
     },
     function(){
      $(this).find('.captions').slideUp(500); //.fadeOut(500)
  });

  // fade in and out back to top button
  var offset = 220;
  var duration = 400;
  jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > offset) {
          jQuery('.back-to-top').fadeIn(duration);
      } else {
          jQuery('.back-to-top').fadeOut(duration);
      }
  });
  jQuery('.back-to-top').click(function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
  })

  // smooth scrolling for document links
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, duration);
        return false;
      }
    }
  });

  $('a').click( function() {
    changeStyle('#28c3ab', '#000', 'bold');
    setTimeout('changeStyle("#000", "#fff", "normal")', 120);
  });
});

function changeStyle(backgroundcolor, fontcolor, weight) {
  document.body.style.background=backgroundcolor;
  document.body.style.color=fontcolor;
  document.body.style.fontWeight=weight;
}
