$(document).ready(function(){

  $('.carousel').carousel()

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


  //E-mail Ajax Send
  $("form").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: th.serialize()
  }).done(function() {
    alert('hey');
   // $(th).find('.success').addClass('active').css('display','flex').hide().fadeIn();
    setTimeout(function() {
      $(th).find('.success').removeClass('active').fadeOut();
      th.trigger("reset");
    }, 2000);
  });
  return false;
});



})
