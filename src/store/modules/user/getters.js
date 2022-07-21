export default {
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
