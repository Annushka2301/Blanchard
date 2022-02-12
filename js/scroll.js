
  $(document).ready(function() {
    $("a.scrollto").click(function () {
      elementClick = $(this).attr("href");
      destination = $(elementClick).offset().top;
        $('html').animate( { scrollTop: destination }, 500 );
      return false;
    });
  });

