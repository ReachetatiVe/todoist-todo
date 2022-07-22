const state = () => ({
  projects: [],
});

const getters = {
  getProjects: (state) => {
    return state.projects;
  },
};

const actions = {
  loadAllProjects(context) {
    const api = context.rootState.user.api;
    // context.commit("setIsLoading", true, { root: true });
    api
      .getProjects()
      .then((projects) => {
        context.commit("setProjects", projects);
        // context.commit("setIsLoading", false, { root: true });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {
  setProjects(state, projectsArr) {
    state.projects = projectsArr;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
