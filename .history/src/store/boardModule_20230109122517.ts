const boardModule = {
  state: () => ({
    chapters: [
    ],
  }),
  mutations: {
    setChapters(state, payload) {
      state.chapters = payload;
    },
  },
  namespaced: true,
};

export default boardModule;
