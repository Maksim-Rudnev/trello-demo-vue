const boardModule = {
  state: () => ({
    chapters: [
    ],
  }),
  mutations: {
    setChapters(state: { chapters: Array<Object>; }, payload: any) {
      state.chapters = payload;
    },
  },
  namespaced: true,
};

export default boardModule;
