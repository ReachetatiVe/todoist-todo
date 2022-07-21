import router from "@/router";
import { TodoistApi } from "@doist/todoist-api-typescript";

export default {
  getApi(context, token) {
    console.log("getApi");
    const api = new TodoistApi(token);
    context.commit("setToken", token);
    context.commit("setApi", api);
    context.commit("setIsAutorized", true);
  },
  initializeStore(context) {
    context.commit("setIsAutorized", false);
    if (!context.state.api || !context.state.api.authToken) {
      let token = "";
      try {
        token = localStorage.getItem("token");
        console.log(token);
        if (token) context.dispatch("getApi", token);
      } catch (error) {
        localStorage.removeItem("token");
        context.commit("setIsAutorized", false);
        router.push("/");
        console.log(error);
      }
    }
    return;
  },
};