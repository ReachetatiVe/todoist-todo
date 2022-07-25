export default {
  loadAllSections(context) {
    const api = context.rootState.user.api;
    api
      .getSections()
      .then((sections) => context.commit("setSections", sections))
      .catch((error) => console.log(error));
  },
};
