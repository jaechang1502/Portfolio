import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      rightMenuOpen : false,
      x: 0,
      y: 0
    }
  },
  mutations: {
    rightMenuMutation(state,data){
      state.rightMenuOpen = data;
    },
    moveX(state,data){
      state.x=data
    },
    moveY(state,data){
      state.y=data
    }
  },
  
})

export default store