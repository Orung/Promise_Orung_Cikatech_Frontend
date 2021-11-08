// import { filter } from "core-js/core/array";

export const state = () => ({
  posts: [],
  isLoading: false,
})


export const mutations = {
  SET_POSTS (state, payload) {
    state.posts = payload
  },
  IS_LOADING (state, payload) {
    state.isLoading = payload;
  },
  removePost:(state, id) => state.posts = state.posts/filter(post => post.id !== id)
};

export const actions = {
  async getPosts ({ commit }) {
    try {
      commit('IS_LOADING', true);
      const { data } = await this.$axios.$get('/post/get');
      commit('SET_POSTS', data);
      commit('IS_LOADING', false);
    } catch (e) {
      console.error(e)
      commit('IS_LOADING', false);
    }
  },
  async createPost({commit, dispatch}, content) {
    try {
      commit('IS_LOADING', true);
      await this.$axios.$post(`/post/create`, {content});
      dispatch('getPosts');
      commit('IS_LOADING', false);
    } catch(e) {
      commit('IS_LOADING', false);
    }
  },
  async deletePost({ commit }, id) {
    try {
      commit('IS_LOADING', true);
      await axios.delete(`/post/delete/${postId}`);
      commit('REMOVE_POST', id);
      commit('IS_LOADING', false);
    } catch (e) {
      console.error(e)
      commit('IS_LOADING', false);
    }
  }  
};

export const getters = {
  getPosts: state => state.posts,
}