import { TodoistApi } from "@doist/todoist-api-typescript";
import router from "@/router";

const state = () => ({
  api: null,
  clientId: "35ad8863b5bb48d2acbe404599b6d56b",
  clientSecret: "d35c80239d744591a42ba84f190a27cb",
  token: "",
  isAutorized: false,
});

const getters = {
  getClientId: (state) => {
    return state.clientId;
  },
  getClientSecret: (state) => {
    return state.clientSecret;
  },
  getIsAutorized: (state) => {
    return state.isAutorized;
  },
};

// actions
const actions = {
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
        if (token) context.dispatch("getApi", token);
        else router.push("/");
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

// mutations
const mutations = {
  setApi(state, api) {
    if (api) {
      state.api = api;
    }
    return;
  },
  setToken(state, token) {
    if (token) {
      state.token = token;
      localStorage.setItem("token", token);
    }
    return;
  },
  setIsAutorized(state, payload) {
    if (payload) {
      state.isAutorized = payload;
    }
    return;
  },
  clearUser(state) {
    state.api = null;
    state.token = "";
    state.isAutorized = false;
    localStorage.removeItem("token");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
