const state = () => ({
  items: [],
  checkoutStatus: null,
  clientId: "65d3dc9ff5dc4d698a1288bb4a769065",
  clientSecret: "7012a5dd7357481a94736d4304f3bc90",
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
