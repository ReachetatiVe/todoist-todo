export default {
  loadAllTasks(context) {
    const api = context.rootState.user.api;
    api
      .getTasks()
      .then((tasks) => {
        context.commit("setTasks", tasks);
      })
      .catch((error) => console.log(error));
  },
};
