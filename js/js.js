$(document).ready(function(){

  $('.carousel').carousel()

  if($('.open-popup-link') == undefined){
    return;
  } else {
    $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true,
    zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
    });
    $('.mfp-wrap').fadeIn();
  }

})
