window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('menu-active')
  });
  document.querySelector('#burgerr').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('menu-active')
  });
    document.querySelector('#searchBtn').addEventListener('click', function() {
    document.querySelector('#search').classList.toggle('search-active')

   });

   $(document).mouseup(function (e) {
    var div = $("#search");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.removeClass("search-active")
    };
});

  document.querySelector('#searchBtnn').addEventListener('click', function() {
    document.querySelector('#search').classList.toggle('search-active')
  });
});
