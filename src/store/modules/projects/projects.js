const state = () => ({
  projects: [],
});

const getters = {};

const actions = {
  loadAllProjects(context) {
    const api = context.rootState.user.api;
    api
      .getProjects()
      .then((projects) => {
        context.commit('setProjects', projects);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {
	setProjects(state, projectsArr) {
		state.projects = projectsArr
	}
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
