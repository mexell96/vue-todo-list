export const loginModule = {
  state: () => ({
    login: {},
  }),
  mutations: {
    loginUser(state, login) {
      state.login = login;
    },
  },
  namespaced: true,
};
