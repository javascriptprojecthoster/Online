document.addEventListener("DOMContentLoaded", function () {
  // Маска номера телефона и Email
  if (document.getElementById("tel")) {
    const formTel = document.getElementById("tel");

    const maskTel = IMask(formTel, {
      mask: "+{7} (000) 000-00-00",
    });
  }

  //Scroller
  if (document.querySelector(".news__items")) {
    $(".news__items").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: true,
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick",
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            speed: 300,
            centerMode: true,
          },
        },
      ],
    });
  }

  // Слайдер-main
  const introRight = document.querySelector(".intro__right");
  const introDot = document.querySelectorAll(".intro__dot");
  const introWrapper = document.querySelector(".intro__wrapper");

  const introLeft = document.querySelector(".left__item");
  const introLeftWrapper = document.querySelector(".left__items");

  for (const i of introDot) {
    i.addEventListener("click", function () {
      const number = i.dataset.number - 1;
      const widthRight = introRight.clientWidth;
      const widthLeft = introLeft.clientWidth;

      const translateRight = 0 - number * widthRight;
      introWrapper.style.transform = "translateX(" + translateRight + "px)";

      const translateLeft = 0 - number * widthLeft;
      introLeftWrapper.style.transform = "translateX(" + translateLeft + "px)";

      for (const j of introDot) {
        j.classList.remove("intro__dot_active");
      }
      i.classList.add("intro__dot_active");
    });
  }
  
  window.addEventListener('resize', function(){
    const currentDot = document.querySelector(".intro__dot_active");
    const currentNumber = currentDot.dataset.number - 1;
    const widthRight = introRight.clientWidth;
    const widthLeft = introLeft.clientWidth;

    const translateRight = 0 - currentNumber * widthRight;
    introWrapper.style.transform = "translateX(" + translateRight + "px)";

    const translateLeft = 0 - currentNumber * widthLeft;
    introLeftWrapper.style.transform = "translateX(" + translateLeft + "px)";
  })

});
