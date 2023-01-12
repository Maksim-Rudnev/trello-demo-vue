const boardModule = {
  state: () => ({
    tasks: [
    ],
  }),
  mutations: {
    setChapters(state: { tasks: Array<Object>; }, payload: any) {
      state.chapters = payload;
    },
  },
  namespaced: true,
};

export default boardModule;
