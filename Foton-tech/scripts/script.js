let pop_Up = document.querySelector(".pop-up");
let pop_UpBtn = document.querySelector(".btn-pop-up");
if (pop_UpBtn) {
  let pop_UpClose = pop_Up.querySelector(".pop-up-close");

  function showPop_UponClick() {
    pop_Up.classList.add('pop-up-show');
  }

  pop_UpBtn.addEventListener('click', showPop_UponClick);


  pop_UpClose.addEventListener('click', function () {
    pop_Up.classList.remove('pop-up-show');
  });

}


let swiper = new Swiper(".my_Swiper", {
  centeredSlides: true,
  slidesPerView: 1.2,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});