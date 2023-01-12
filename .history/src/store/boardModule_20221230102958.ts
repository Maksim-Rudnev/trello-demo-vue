const boardModule = {
  state: () => ({
    chapters: [
      the
    ],
  }),
  mutations: {
    setVisible(state, payload) {
      state.visible = payload;
    },
    setType(state, payload) {
      state.type = payload;
    },
  },
  namespaced: true,
};

export default boardModule;
