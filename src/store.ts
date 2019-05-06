import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

type StoreState = {
  [key: string]: boolean;
};

const state: StoreState = {
  loggedIn: false
};

export const mutations = {};

export const actions = {};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
