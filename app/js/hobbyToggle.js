$(document).ready(function() {
  $(".drop").hide();
  $(".img-caption h2").click(
    function() {
      if ($(this).parent().next().is(":visible")) {
        $(this).parent().next().slideUp();
      } else {
        $(this).parent().next().slideDown();
      }
    }
  );  
});
