

document.addEventListener('DOMContentLoaded', function scroll () {

  var hiddenElement = document.querySelector(".catal__wrapper-left");

  document.querySelectorAll('.catal__name-btn').forEach(function(scrollBtn) {
    scrollBtn.addEventListener('click', function handleButtonClick() {
    if (window.innerWidth < 1001) {
      hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
    };
    });
});
});


