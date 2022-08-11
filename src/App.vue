<template>
  <swiper
    :direction="'vertical'"
     :scrollbar="{
      hide: true,
    }"
    :mousewheel="true"  
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide
    ><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide
    ><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
    ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
    ><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import './plugin/swiper'


// import required modules
import { Scrollbar, Mousewheel } from "swiper";

export default {
  components: {
    Swiper, 
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Scrollbar, Mousewheel],
    };
  },
};
</script>
