$(function () {
  $(document).scroll(function () {
    var $nav = $(".toolbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});