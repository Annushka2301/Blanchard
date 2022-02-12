document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.catal__tabs-btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(event) {
  const path = event.currentTarget.dataset.path;

  document.querySelectorAll('.catal__tab-content').forEach(function(tabContent) {
  tabContent.classList.remove('catal__tab-content-active')
  });
  document.querySelector(`[data-target="${path}"]`).classList.add('catal__tab-content-active')
  });
  });

});



document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.catal__name-btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(event) {
  const path = event.currentTarget.dataset.path;

  document.querySelectorAll('.catal__art-content').forEach(function(tabContent) {
  tabContent.classList.remove('catal__art-content-act')
  });
  document.querySelector(`[data-target="${path}"]`).classList.add('catal__art-content-act')
  });
  });
});

