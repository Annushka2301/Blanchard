var swiper = new Swiper('.hero__swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});

let gallerySlider = new Swiper(".gal__swiper-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".gal__navigation .gal__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gal__next",
    prevEl: ".gal__prev"
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 33
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: false

});

var mySwiperFour = new Swiper('.project__swiper', {

  slidesPerView: 1,
  spaceBetween: 37,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },

  ally: false
});

const MOBILE_WIDTH = 580;

const sliderParamsNotMobile = {
  sliderWrap: 'public__swiper-main',
  cardsContainerName: "public__swiper",
  cardsWrapName: "public__swiper-wrapper",
  card: "public__slide",
  paginationClassName: "public__pagination",
  navClassName: "public__navigation",
  navBtnClassName: "public__nav-btn",
  navPrev: "public__prev",
  navNext: "public__next"
};

function getWindowWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );
};

function activateSlider(params) {
  const navigation = document.createElement("div");
  const pagination = document.createElement("div");
  const navBtnPrev = document.createElement("button");
  const navBtnNext = document.createElement("button");

  navigation.classList.add(params.navClassName);

  navBtnPrev.classList.add(params.navBtnClassName);
  navBtnPrev.classList.add(params.navPrev);
  navigation.prepend(navBtnPrev);

  pagination.classList.add(params.paginationClassName);
  navigation.append(pagination);

  navBtnNext.classList.add(params.navBtnClassName);
  navBtnNext.classList.add(params.navNext);
  navigation.append(navBtnNext);

  params.sliderWrapElem.prepend(navigation);

  params.cardsContainer.classList.add("swiper-container");
  params.cardsWrap.classList.add("swiper-wrapper");

  params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
    slidesPerView: 3,
    spaceBetween: 50,

    pagination: {
      el: `.${params.sliderWrap} .${params.paginationClassName}`,
      type: "fraction"
    },

    navigation: {
      nextEl: `.${params.navNext}`,
      prevEl: `.${params.navPrev}`
    },

      breakpoints: {
    580: {
      spaceBetween: 34,
      slidesPerView: 2,

    },
    1200: {
      spaceBetween: 47,
      slidesPerView: 3,

    }
  },

    on: {
      beforeInit() {
        document.querySelectorAll(`.${params.card}`).forEach((el) => {
          el.classList.add("swiper-slide");
        });
      },

      beforeDestroy() {
        this.slides.forEach((el) => {
          el.classList.remove("swiper-slide");
          el.removeAttribute("role");
          el.removeAttribute("aria-label");
        });

        this.pagination.el.remove();
        navigation.remove();
      }
    }
  });
};

function destroySlider(params) {
  params.cardsSlider.destroy();
  params.cardsContainer.classList.remove("swiper-container");
  params.cardsWrap.classList.remove("swiper-wrapper");
  params.cardsWrap.removeAttribute("aria-live");
  params.cardsWrap.removeAttribute("id");
};

function checkWindowWidth(params) {
  const currentWidth = getWindowWidth();
  params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
  params.cardsContainer = document.querySelector(
    `.${params.cardsContainerName}`
  );
  params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

  if (
    currentWidth > MOBILE_WIDTH &&
    (!params.cardsSlider || params.cardsSlider.destroyed)
  ) {
    activateSlider(params);
  } else if (currentWidth <= MOBILE_WIDTH && params.cardsSlider) {
    destroySlider(params);
  };
};

checkWindowWidth(sliderParamsNotMobile);

window.addEventListener("resize", function () {
  checkWindowWidth(sliderParamsNotMobile);
});

const MOBILE_WIDE = 580;
const DESKTOP_WIDTH = 1001;
const btn = document.querySelector('#moreEvents');

const sliderMobileParams = {
  paginationClassName: 'event__swiper__pagination',
  cardsContainerName: 'event__swiper',
  cardsWrapName: 'event__swiper-wrapper',
  card: 'event__slide',
  hiddenClass: 'is-hidden'
};

function getWindowWidth () {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );
};

function activateMobileSlider (params) {
  const pagination = document.createElement("div");
  pagination.classList.add(params.paginationClassName);
  params.cardsContainer.append(pagination);

  params.cardsContainer.classList.add("swiper-container");
  params.cardsWrap.classList.add("swiper-wrapper");


  params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: `.${params.cardsContainerName} .${params.paginationClassName}`
    },

    on: {
      beforeInit() {
        document
          .querySelectorAll(`.${params.card}`)
          .forEach((el) => {
            el.classList.add("swiper-slide");
        });
      },

      beforeDestroy() {
        this.slides.forEach((el) => {
          el.classList.remove("swiper-slide");
          el.removeAttribute("role");
          el.removeAttribute("aria-label");
        });

        this.pagination.el.remove();
      }
    }
  });
};

function destroyMobileSlider (params) {
  params.cardsSlider.destroy();
  params.cardsContainer.classList.remove("swiper-container");
  params.cardsWrap.classList.remove("swiper-wrapper");
  params.cardsWrap.removeAttribute("aria-live");
  params.cardsWrap.removeAttribute("id");
};

function setHiddenCards (params, windowWidth) {
  const cards = document.querySelectorAll(`.${params.card}`);
  let quantity = cards.length;


  if (windowWidth > MOBILE_WIDTH && windowWidth < DESKTOP_WIDTH) {
    quantity = 2;
  };

  if (windowWidth >= DESKTOP_WIDTH) {
    quantity = 3;
  };

  cards.forEach((card, i) => {
    card.classList.remove(params.hiddenClass);
    if (i >= quantity) {
      card.classList.add(params.hiddenClass);
    };
  });
};

function showCards (e) {
  const cards = document.querySelectorAll(`.${sliderMobileParams.card}`);

  e.target.style = 'display: none';

  cards.forEach(card => {
    card.classList.remove(sliderMobileParams.hiddenClass);
  });
};

function checkWindowWidthMobile (params) {
  const currentWidth = getWindowWidth();
  btn.style = '';
  params.cardsContainer = document.querySelector(`.${params.cardsContainerName}`);
  params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

  if (currentWidth <= MOBILE_WIDTH && (!params.cardsSlider || params.cardsSlider.destroyed)) {
    activateMobileSlider(params);
  } else if (
    currentWidth > MOBILE_WIDTH &&
    params.cardsSlider
  ) {
    destroyMobileSlider(params);
  };

  setHiddenCards(params, currentWidth);
};

checkWindowWidthMobile(sliderMobileParams);
btn.addEventListener('click', showCards);

window.addEventListener('resize', function () {
  checkWindowWidthMobile(sliderMobileParams);
});









