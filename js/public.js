
$(function() {
  $('.public__click').click(function() {
    $('#one, #two').toggleClass('hidden');
  });
});

function checkboxToggle() {
  let btn = document.querySelector(".public__click");
  let labels = document.querySelectorAll(".public__checkbox-label");
  let listLabels = document.querySelector(".public__check-list");
btn.addEventListener("click", toggleSpoiler);
  btn.addEventListener("keyup", function(e) {
    console.log(e.key);
    if (e.code === "Enter") {
      toggleSpoiler();
    }
  })
function toggleSpoiler() {
    if (!listLabels.classList.contains("checklist-active")) {
    listLabels.classList.add("checklist-active");
    labels.forEach(item => {
      animationItem(item, "public__checkbox-label-active", "animation-test", "add");
    })
  } else {
    listLabels.classList.remove("checklist-active");
    labels.forEach(item => {
        if (item.querySelector(".public__checkbox").checked) {
        animationItem(item, "public__checkbox-label-active", "animation-test", "add");
      } else {
        animationItem(item, "public__checkbox-label-active", "animation-test", "remove");
      }
      });
  }
  labels.forEach(item => {
    item.addEventListener("click", function() {
      if (!listLabels.classList.contains("checklist-active")) {
        animationItem(this, "public__checkbox-label-active", "animation-test", "remove");
      }
    });
  })
}
function animationItem(item, class1, class2, f) {
 if (f === "add") {
    item.classList.add(class1);
  setTimeout(function() {
    item.classList.add(class2)
  }, 0);

 } else {
     item.classList.remove(class2);
  setTimeout(function() {
    item.classList.remove(class1)
  }, 0);
  }

}


}

checkboxToggle()

