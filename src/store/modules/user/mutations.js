export default {
  setApi(state, api) {
    if (api) {
      state.api = api;
    }
    return;
  },
  setToken(state, token) {
    if (token) {
      console.log("setToken");
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
    localStorage.removeItem("isRedirected");
  },
};
