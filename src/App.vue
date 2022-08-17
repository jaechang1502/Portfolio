<template>
<headerView></headerView>
  <swiper
    :direction="'vertical'"
     :scrollbar="{
      hide: true,
    }"
    :mousewheel="true"  
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="Intro"><Intro></Intro></swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Contact Me</swiper-slide>
  </swiper>
</template>
<script>
import Intro from './components/introHome.vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import './plugin/swiper'


// import required modules
import { Scrollbar, Mousewheel } from "swiper";
import headerView from './views/header.vue';

export default {
  components: {
    Intro,
    Swiper, 
    SwiperSlide,
    headerView
  },
  setup() {
    return {
      modules: [Scrollbar, Mousewheel],
    };
  },
};
</script>
