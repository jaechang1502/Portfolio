<template>
<header class="header">
  <div class="header_con">
    <div class="header_left">
      <router-link to="/">
      <img src="../assets/123.jpg" class="header_img">
      </router-link>
      <div>
        <nav class="ml-10">
          <ul class="flex headerUL" :style="{color:colorphonewithmail}">
            <li class="flex-auto ml-2 cursor-pointer" @click="phoneNumber">+82 10-3692-5367</li>
            <li class="flex-auto ml-2">/</li>
            <li class="flex-auto ml-2 cursor-pointer" @click="mailto">jaechang1502@github.com</li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="header_right" >
      <div class="space-y-2 header_right_button" @click="$store.commit('rightMenuMutation',true)">
        <span class="block w-5 h-0.5 bg-black" :style="{backgroundColor:rightcolor}"></span>
        <span class="block w-8 h-0.5 bg-black" :style="{backgroundColor:rightcolor}"></span>
      </div>
    </div>
  </div>
</header>
<rightMenu v-show="$store.state.rightMenuOpen"></rightMenu>

</template>

<script>
import rightMenu from './rightMenu.vue'
export default {
  components:{
    rightMenu
  },
  data(){
    return {
        rightMenuOpen: false,
        isActive: true
    }
  },
  computed:{
    colorphonewithmail(){
      const x = this.$store.state.x;
      const slide = this.$store.state.swiperindex
      if(x>=50&&x<200||x>=400&&x<550||x>770&&x<920||x>=1027&&x<=1277||x>1490||slide==1||slide==3){
       return `#000`;
      }else{
        return `#F5F5DC`;
      }
    },
    rightcolor(){
      const slide = this.$store.state.swiperindex
      if(slide==2||slide==4){
        return `#ffffff`;
      }
    },
    phoneNumber(){
      document.location.href="tel:821076883321"
    },
    mailto(){
      document.location.href="mailto:jaechang1502@github.com"
    }
  }  

}
</script>

<style>

</style>