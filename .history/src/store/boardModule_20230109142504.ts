import { Task } from '@/models/Task';
import { Commit } from 'vuex';

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
    async setChapters({commit, payload: Task[]) {
      commit('setChapters', payload);
    },
  },
  namespaced: true,
};

export default boardModule;