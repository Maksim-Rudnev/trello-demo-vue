const boardModule = {
  state: () => ({
    chapters: [
    ],
  }),
  mutations: {
    setChapters(state: { chapters: Array<T>; }, payload: any) {
      state.chapters = payload;
    },
  },
  namespaced: true,
};

export default boardModule;
