import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

type StoreState = {
  [key: string]: boolean;
};

const state: StoreState = {
  modalIsDisplaying: false
};

export const mutations = {
  setModalAttr(st: StoreState, el: HTMLElement) {
    el.dataset.isModal = 'true';
  },
  toggleModal(st: StoreState) {
    st.modalIsDisplaying = !st.modalIsDisplaying;
  }
};

export const actions = {};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
