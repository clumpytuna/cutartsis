import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pageHeight: window.innerHeight,
    pageWidth: window.innerWidth,
    cutModal: null,
    // cutModal: {
    //   image: { image: String, width: Number, height: Number },
    //   previewSrc: String,
    // },
  },
  mutations: {
    updatePageWidth(state) {
      state.pageHeight = window.innerHeight;
      state.pageWidth = window.innerWidth;
    },
    setCutModal(state, cutModal) {
      state.cutModal = cutModal;
    },
  },
});
export default store;

window.addEventListener('resize', () => store.commit('updatePageWidth'));
