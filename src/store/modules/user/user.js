import { TodoistApi } from "@doist/todoist-api-typescript";

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
    const api = new TodoistApi(token);
    context.commit("setApi", api);
    context.commit("setToken", token);
    context.commit("setIsAutorized", true);
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
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
