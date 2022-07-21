export default {
  setIsLoading: (state, payload) => {
    console.log("setIsLoading");
    if (typeof payload === "boolean") state.isLoading = payload;
    return;
  },
};
