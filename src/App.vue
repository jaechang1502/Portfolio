<template>
<headerView></headerView>
  <swiper
    :direction= swiper.direction
    :scrollbar=swiper.scrollbar
    :mousewheel=swiper.mousewheel
      
    :modules="modules"
    class="mySwiper"
    @swiper="onSwiper" @slideChange="onSlideChange" @reachEnd="reachEnd"
  >
    <swiper-slide><router-view></router-view></swiper-slide>
    <swiper-slide class="AboutMe"><AboutMe></AboutMe></swiper-slide>
    <swiper-slide><Skills></Skills></swiper-slide>
    <swiper-slide><Career></Career></swiper-slide>
    <swiper-slide><ContactMe></ContactMe></swiper-slide>
  </swiper>
</template>
<script>

import Intro from './components/introHome.vue'
import AboutMe from './components/AboutMe.vue'
import ContactMe from './components/ContactMe.vue'
import Skills from './components/SkillsComponent.vue'
import Career from './components/CareerComponent.vue'
import headerView from './views/header.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import './plugin/swiper'


// import required modules
import { Scrollbar, Mousewheel } from "swiper";




export default {
  components: {
    Intro,
    AboutMe,
    Swiper,
    SwiperSlide,
    headerView,
    ContactMe,
    Skills,
    Career
},
  data(){
    return{ 
      swiper: {
        direction: "vertical",
        scrollbar: {
          hide: true
        },
        mousewheel: true,
        modules: "modules",
      },  
    }
  },
  methods: {
    onSwiper(swiper){
      this.$store.commit('swiper',swiper);
    },
    onSlideChange(index){
      this.$store.commit('swiperIndex',index.activeIndex)
    }
  },
  setup() {    
      const reachEnd = ()=>{
        console.log('reachend')
      }
    return {
      reachEnd,
      modules: [Scrollbar, Mousewheel],
    };
  },
};
</script>
