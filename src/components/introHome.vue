<template>
<div class="Intro"  @mousemove="onMousemove" :style="{background: createBackground}">
    <div class="Home flex">
        <div class="font-extrabold HomeText">
           <div>Hi</div>
           <div>I'm Front-end</div>
           <div>Web Developer</div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    data(){
        return{
            introduce: "Hi\n I'm FrontEnd\n Web Developer"
        }
    },
    methods: {
        onMousemove(e){
            this.$store.commit('moveX',e.clientX);
            this.$store.commit('moveY',e.clientY);
        }
    },
    computed:{
        createBackground(){
            return `linear-gradient(90deg, hsl(${this.$store.state.x},80%,60%) 60%, hsl(${this.$store.state.y},80%,80%) 100%)`;
        }
    }
   
}
</script>

<style>
    
</style>