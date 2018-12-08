import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pageWidth: window.innerWidth,
  },
  mutations: {
    updatePageWidth(state) {
      state.pageWidth = window.innerWidth;
    },
  },
});
export default store;

window.addEventListener('resize', () => store.commit('updatePageWidth'));
