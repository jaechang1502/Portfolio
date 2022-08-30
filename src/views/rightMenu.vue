<template>
  <Transition name="slide-fade" >
    <div class="rightMenu" @mouseleave="test">
    <div class="rightMenuClose" @click="$store.commit('rightMenuMutation',false)">
      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <div class=" text-white flex flex-col mt-10 justify-center font-bold text-5xl">
      <div @click="homeclick(0)" class="cursor-pointer mb-5 hover:text-amber-400">Home</div>
      <div @click="homeclick(1)" class="cursor-pointer mb-5 hover:text-amber-400">AboutMe</div>
      <div @click="homeclick(2)" class="cursor-pointer mb-5 hover:text-amber-400">Skills</div>
      <div @click="homeclick(3)" class="cursor-pointer mb-5 hover:text-amber-400">Career</div>
      <div @click="homeclick(4)" class="cursor-pointer mb-5 hover:text-amber-400">ContactMe</div>
    </div>
    <div class="text-white text-2xl flex mt-5 pt-9 justify-around">
      <div class="cursor-pointer" @click="clicklocation('https://github.com/jaechang1502')">GitHub.</div>
      <div class="cursor-pointer" @click="clicklocation('https://chiman.tistory.com')">Blog.</div>
    </div>
  </div>
</Transition>
</template>

<script>
export default {
  methods:{
    homeclick(k){
    this.$store.state.swiper.slideTo(k,0.2)
    },
    test(){
      this.$store.commit('rightMenuMutation',false);
    },
    clicklocation(loca){
      window.open(loca)
    }
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