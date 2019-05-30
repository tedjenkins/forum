import Vue from 'vue';
import Vuex from 'vuex';
import { props } from '@/utils';

Vue.use(Vuex);

type VueState = {
  [key: string]: string | boolean;
};

const state: VueState = {
  dbConnectionLost: false,
  loggedIn: false,
  siteName: props.siteName // For ability to access within <template> tags.
};

export const mutations = {
  /** If connection to database is attempted and fails, set prop to true so conditionals can run. */
  flagLostDb(st: VueState) {
    st.dbConnectionLost = true;
  },

  /** Toggle between 'logged in' and 'not logged in' displays. */
  toggleLoggedIn(st: VueState) {
    st.loggedIn = !st.loggedIn;
  }
};

export const actions = {};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
