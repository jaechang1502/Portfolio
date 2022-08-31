import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      swiper : '',
      rightMenuOpen : false,
      x: 0,
      y: 0,
      swiperindex:0,
      modal:false
    }
  },
  mutations: {
    swiper(state,data){
      state.swiper = data
    },
    rightMenuMutation(state,data){
      state.rightMenuOpen = data;
    },
    moveX(state,data){
      state.x=data
    },
    moveY(state,data){
      state.y=data
    },
    swiperIndex(state,data){
      state.swiperindex=data
    },
    modalOpen(state,data){
      state.modal = data  
    }
  },
  
})

export default store