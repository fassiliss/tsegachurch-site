import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

// Enable modules globally (Swiper v8)
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

export const banner1 = {
  loop: true,
  effect: "fade" as const,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
};

export const testimonialSlider = {
  loop: true,
  effect: "slide" as const,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
};

export const itemTwoSlider = {
  loop: true,
  effect: "slide" as const,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { spaceBetween: 0, slidesPerView: 1 },
    600: { spaceBetween: 0, slidesPerView: 1 },
    992: { spaceBetween: 0, slidesPerView: 2 },
  },
};

export const itemThreeSlider = {
  loop: true,
  effect: "slide" as const,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { spaceBetween: 0, slidesPerView: 1 },
    768: { spaceBetween: 0, slidesPerView: 2 },
    992: { spaceBetween: 0, slidesPerView: 3 },
  },
};

export const fiveItemCarousel = {
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { spaceBetween: 0, slidesPerView: 1 },
    600: { spaceBetween: 0, slidesPerView: 2 },
    768: { spaceBetween: 0, slidesPerView: 3 },
    992: { spaceBetween: 0, slidesPerView: 4 },
    1199: { spaceBetween: 0, slidesPerView: 5 },
  },
};
