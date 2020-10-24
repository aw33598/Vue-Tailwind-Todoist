import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import todoist from './todoist';

export default new Vuex.Store({
  modules: {
    todoist
  }
})
