const state = {
  path: null
};
const mutations = {
  updatePath(state, path) {
    state.path = path;
  }
};
const actions = {
  updatePath({ commit }, path) {
    commit("updatePath", path);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
