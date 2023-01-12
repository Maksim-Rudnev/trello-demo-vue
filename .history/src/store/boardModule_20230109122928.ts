const boardModule = {
  state: () => ({
    chapters: [
    ],
  }),
  mutations: {
    setChapters(state: { chapters: any; }, payload: any) {
      state.chapters = payload;
    },
  },
  namespaced: true,
};

export default boardModule;
