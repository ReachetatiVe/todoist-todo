export default {
  setTasks(state, tasks = []) {
    console.log("setTasks");
    console.log(tasks);
    state.tasks = [...tasks];
    return;
  },
};
