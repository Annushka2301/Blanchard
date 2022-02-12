
$(".catal__tabs-btn").click(function(e) {
  e.preventDefault();
  $(".catal__tabs-btn").removeClass('alert');
  $(this).addClass('alert');
});

$(".catal__name-btn").click(function(e) {
  e.preventDefault();
  $(".catal__name-btn").removeClass('artact');
  $(this).addClass('artact');
});

