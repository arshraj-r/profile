/* $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});*/


$(function() {
  
  if( $(window).width() >= 992 ) {
      $('#page-education, #page-work, #page-skills, #page-licences, #page-transport, #page-providers, #page-referees').hide();
      $('a[href="#page-about"]').css({'color':'#35BD82'});
    
    $('a[href^="#page"]').on('click', function(){
        var attrib = $(this).attr('href');
        $('a[href^="#page"]').css({'color':'#444'});
        $(this).css({'color':'#35BD82'});
        $('[id^="page"]').hide();
        $(attrib).show();
      });
  };
  
  $( window ).resize(function() {
    var currentWidth = $(window).width();
    if( !($('#page-education, #page-about').is(':hidden')) && ($(window).width() >= 992) ) {
      $('#page-education, #page-work, #page-skills, #page-licences, #page-transport, #page-providers, #page-referees').hide();
      $('a[href^="#page"]').css({'color':'#444'});
      $('a[href="#page-about"]').css({'color':'#35BD82'});
    };
    
    if( $(window).width() < 992 ) {
      $('#page-about, #page-education, #page-work, #page-skills, #page-licences, #page-transport, #page-providers, #page-referees').show();
    }
  });
  
});
