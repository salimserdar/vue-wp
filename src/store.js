import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    username: 'SalimSerdar',
    posts: [],

  },
  mutations: {
    updateusername(state, name) {
      state.username = name;
    },
    setPosts(state, payload) {
      state.posts = payload;
    },
  },
  actions: {
    updateusername({ commit }, name) {
      commit('updateusername', name);
    },
    // eslint-disable-next-line no-unused-vars
    loadPosts({ commit }) {
      axios.get('http://localhost:8888/react-wp/wp-json/wp/v2/posts')
        .then((res) => {
          const posts = res.data;
          commit('setPosts', posts);
        });
    },
  },
});
