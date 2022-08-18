<template>
<headerView></headerView>
  <swiper
    :direction= swiper.direction
    :scrollbar=swiper.scrollbar
    :mousewheel=swiper.mousewheel  
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="Intro" @mousemove="onMousemove" :style="{background: createBackground}" ><Intro></Intro></swiper-slide>
    <swiper-slide><Skill></Skill></swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Contact Me</swiper-slide>
  </swiper>
</template>
<script>
import Intro from './components/introHome.vue'
import Skill from './components/skillComponent.vue'

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
    Skill,
    Swiper, 
    SwiperSlide,
    headerView
  },
  data(){
    return{ 
      swiper: {
        direction: "vertical",
        scrollbar: {
          hide: true
        },
        mousewheel: true,
        modules: "modules"
      },
      
    }
  },
  methods:{
    onMousemove(e){
      this.$store.commit('moveX',e.clientX);
      this.$store.commit('moveY',e.clientY);
    }
  },
  computed: {
    createBackground(){
      return `linear-gradient(90deg, hsl(${this.$store.state.x},80%,60%) 60%, hsl(${this.$store.state.y},80%,80%) 100%)`;
    }
  },
  setup() {
    return {
      modules: [Scrollbar, Mousewheel],
    };
  },
};
</script>
