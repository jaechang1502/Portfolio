<template>
<header class="header">
  <div class="header_con">
    <div class="header_left">
      <router-link to="/#Home">
      <img src="../assets/123.jpg" class="header_img">
      </router-link>
      <dlv>
        <nav class="ml-10">
          <ul class="flex headerUL">
            <li class="flex-auto ml-2">+82 10-3692-5367</li>
            <li class="flex-auto ml-2">/</li>
            <li class="flex-auto ml-2">jaechang1502@github.com</li>
          </ul>
        </nav>
      </dlv>
    </div>
    <div class="header_right" >
      <div class="space-y-2 header_right_button" @click="$store.commit('rightMenuMutation',true)">
        <span class="block w-5 h-0.5 bg-black"></span>
        <span class="block w-8 h-0.5 bg-black"></span>
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
        rightMenuOpen: false
    }
  }  

}
</script>

<style>


</style>