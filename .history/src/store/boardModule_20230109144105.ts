import { Task } from '@/models/Task';
import { Commit } from 'vuex';

const boardModule = {
  state: () => ({
    tasks: [
    ],
    num: 0,
  }),
  mutations: {
    setChapters(state: { tasks: Task[]; }, payload: Task[]) {
      state.tasks = payload;
    },
    setNum(state: { tasks: Task[]; }, payload: number)
  },
  actions: {
    async setChapters({ commit }: { commit: Commit }, payload: Task[]) {
      commit('setChapters', payload);
    },
  },
  namespaced: true,
};

export default boardModule;
