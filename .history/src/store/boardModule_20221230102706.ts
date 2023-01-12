const boardModule = {
  state: () => ({
    visible: false,
    type: '',
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

export default dialogModule;
