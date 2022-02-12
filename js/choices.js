// const element = document.querySelector('#galSelect');
// const choices = new Choices(element, {
//   searchEnabled: false,
//   itemSelectText: '',
// });

window.addEventListener('DOMContentLoaded', function() {

  const element = document.querySelector('.select-filter');
  const choices = new Choices(element, {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
  });

  document.querySelectorAll('.select-filter').forEach(function(el) {
      let ariaLabel = el.getAttribute('aria-label');
      el.closest('.choices').setAttribute('aria-label', ariaLabel);
  });
})
