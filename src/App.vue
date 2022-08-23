<template>
<headerView></headerView>
  <swiper
    :direction= swiper.direction
    :scrollbar=swiper.scrollbar
    :mousewheel=swiper.mousewheel
      
    :modules="modules"
    class="mySwiper"
    :ref="mySwiper"
    @swiper="onSwiper" @slideChange="onSlideChange" @reachEnd="reachEnd"
  >
    <swiper-slide><router-view></router-view></swiper-slide>
    <swiper-slide class="AboutMe"><AboutMe></AboutMe></swiper-slide>
    <swiper-slide>Skill</swiper-slide>
    <swiper-slide>etc</swiper-slide>
    <swiper-slide><ContactMe></ContactMe></swiper-slide>
  </swiper>
</template>
<script>
import {ref} from 'vue';
import Intro from './components/introHome.vue'
import AboutMe from './components/AboutMe.vue'
import ContactMe from './components/ContactMe.vue'

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
    AboutMe,
    Swiper,
    SwiperSlide,
    headerView,
    ContactMe,
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
  computed:{
      change(index){
        if(index === 0){
        return this.$router.push('/');
      }
      }
      


  },
  setup() {
    const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      const reachEnd = ()=>{
        console.log('reachend')
      }
    return {
      onSwiper,
      onSlideChange,
      reachEnd,
      modules: [Scrollbar, Mousewheel],
    };
  },
};
</script>
