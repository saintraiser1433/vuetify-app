import { createStore } from 'vuex'

export default createStore({
  state: {
    dataTitle : [
      {
        title:'fdf',
        subtitle:''
      }
    ]
  },
  getters: {
    getDataTitle(state){
      return state.dataTitle[0];
    }
  },
  mutations: {
    saveDataTitle(state,payload){
      state.dataTitle[0] = { ...payload };
    }
  },
  actions: {
    saveData({ commit }, payload) {
      commit('saveDataTitle', payload)
  }
  },
  modules: {
  }
})
