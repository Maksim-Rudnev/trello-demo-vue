const boardModule = {
  state: () => ({
    chapters: [
    ],
  }),
  mutations: {
    setchapters(state, payload) {
      state.visible = payload;
    },
  },
  namespaced: true,
};

export default boardModule;
