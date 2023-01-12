const boardModule = {
  state: () => ({
    chapters: [
    ],
  }),
  mutations: {
    setChapters(state, payload) {
      state.visible = payload;
    },
  },
  namespaced: true,
};

export default boardModule;
