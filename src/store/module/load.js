const state = {
  LOADING: false
};
const mutations = {
  showLoading(state) {
    state.LOADING = true;
  },
  hideLoading(state) {
    state.LOADING = false;
  }
};
const actions = {
  showLoading(context) {
    context.commit("showLoading");
  },
  hideLoading(context) {
    context.commit("hideLoading");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
