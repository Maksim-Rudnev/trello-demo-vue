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
    setNum(state: { num: number; }, payload: number) {
      state.num = payload;
    },
  },
  actions: {
    async setChapters({ commit }: { commit: Commit }, payload: Task[]) {
      commit('setChapters', payload);
    },
    async setNum({ commit } : { commit: Commit }, payload: number)
  },
  namespaced: true,
};

export default boardModule;
