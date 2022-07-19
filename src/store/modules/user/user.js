const state = () => ({
  items: [],
  checkoutStatus: null,
  clientId: "35ad8863b5bb48d2acbe404599b6d56b",
  clientSecret: "d35c80239d744591a42ba84f190a27cb",
  token: "",
});

const getters = {
  getClientId: (state) => {
    return state.clientId;
  },
  getClientSecret: (state) => {
    return state.clientSecret;
  },
};

// actions
const actions = {};

// mutations
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1,
    });
  },

  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find((item) => item.id === id);
    cartItem.quantity++;
  },

  setCartItems(state, { items }) {
    state.items = items;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
