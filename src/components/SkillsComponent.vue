<template>
  <div class="skills">
    <div class="skillsbackground">
        <img src="../assets/star.jpg" alt=""/>
    </div>
    <div class="relative skillcon">
      <div class="text-white font-extrabold text-6xl">
        Skills
      </div>
      <swiper class="skillswiper text-white"
       :slides-per-view="3"
       :space-between="50"
      >
        <swiper-slide>12131231231</swiper-slide>
        <swiper-slide>2@@@@@@@@@@</swiper-slide>
        <swiper-slide>3########</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import '../plugin/swiper'


export default {
 components:{
  Swiper,
  SwiperSlide,
 }

}
</script>

<style>    
.skills .skillsbackground{
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;
    }
  .skills .skillcon{
        bottom: 10rem;
        right: 31rem;
  }
  

</style>