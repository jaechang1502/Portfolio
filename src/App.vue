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
    <swiper-slide class="AboutMe"><AboutMe></AboutMe></swiper-slide>
    <swiper-slide>Skill</swiper-slide>
    <swiper-slide>재창이 팝니다 시발 좀 사 </swiper-slide>
    <swiper-slide><ContactMe></ContactMe></swiper-slide>
  </swiper>
</template>
<script>
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
