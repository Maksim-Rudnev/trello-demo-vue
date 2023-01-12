import { Task } from '@/models/Task';

const boardModule = {
  state: () => ({
    tasks: [
    ],
  }),
  mutations: {
    setChapters(state: { tasks: Task[]; }, payload: Task[]) {
      state.tasks = payload;
    },
  },
  actions: {
    async setChapters({ commit }, payload) {
      commit('setChapters', payload);
    },
  },
  namespaced: true,
};

export default boardModule;
