import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      rightMenuOpen : false
    }
  },
  mutations: {
    rightMenuMutation(state,data){
      state.rightMenuOpen = data;
    }
  },
  
})

export default store