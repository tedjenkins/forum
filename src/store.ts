import Vue from 'vue';
import Vuex from 'vuex';
import { props } from '@/utils';

Vue.use(Vuex);

const state = {
  siteName: props.siteName,
  loggedIn: false
};

export const mutations = {};

export const actions = {};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
