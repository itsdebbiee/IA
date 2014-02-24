$(document).ready(function() {
  $(".headlines").click(function(e) {
    e.preventDefault();

    $(".headlines").fadeOut('fast');
    $(".headline-content").fadeIn('fast');

  });
});