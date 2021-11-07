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
  }
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
  }  
};

export const getters = {
  getPosts: state => state.posts,
}