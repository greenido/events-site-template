/* Author:
 Ido Green
greenido.wordpress.com
@greenido

*/

$(document).ready(function() {

  $('#navbar').scrollspy( {offset: 50});

  $(".alert").alert();
  
  $('.tooltip').tooltip();
  
  $('#myCarousel').carousel({
    interval: 5000,
    pause: "hover"
  });
  
  $("#more-head").hide();
  // shows the slickbox on clicking the noted link  
  $('#more-head-but').click(function() {
    $('#more-head').show('slow');
    $('#more-head-but').hide('slow');
    return false;
  });
  // hides the slickbox on clicking the noted link  
  $('#less-head-but').click(function() {
    $('#more-head').hide('fast');
    $('#more-head-but').show('fast');
    return false;
  });
});





