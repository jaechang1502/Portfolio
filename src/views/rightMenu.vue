<template>
  <Transition name="slide-fade" >
    <div class="rightMenu" @mouseleave="test">
    <div class="rightMenuClose" @click="$store.commit('rightMenuMutation',false)">
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <div class=" text-white flex flex-col mt-10 justify-center font-bold text-6xl">
      <div @click="homeclick" class="cursor-pointer mb-5 ">Home</div>
      <div @click="Aboutclick" class="cursor-pointer mb-5">AboutMe</div>
      <div @click="Skillclick" class="cursor-pointer mb-5">Skills</div>
      <div @click="ETCclick" class="cursor-pointer mb-5">ETC</div>
      <div @click="Contactclick" class="cursor-pointer mb-5">ContactMe</div>
    </div>
  </div>
</Transition>
</template>

<script>
export default {
  methods:{
    homeclick(){
    this.$store.state.swiper.slideTo(0,0.2)
    },
    Aboutclick(){
    this.$store.state.swiper.slideTo(1,0.2)
    },
    Skillclick(){
    this.$store.state.swiper.slideTo(2,0.2)
    },
    ETCclick(){
    this.$store.state.swiper.slideTo(3,0.2)
    },
    Contactclick(){
    this.$store.state.swiper.slideTo(4,0.2)
    },
  }

}
</script>

<style>
  .slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>