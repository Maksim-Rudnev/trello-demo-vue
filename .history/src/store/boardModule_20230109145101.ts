import { Task } from '@/models/Task';
import { Commit } from 'vuex';

const boardModule = {
  state: () => ({
    tasks: [],
    theme: [],
  }),
  mutations: {
    setTasks(state: { tasks: Task[]; }, payload: Task[]) {
      state.tasks = payload;
    },
    setThemes(state: { tasks: Task[]; }, payload: Task[]) {
      state.tasks = payload;
    },
  },
  actions: {
    async setTasks({ commit }: { commit: Commit }, payload: Task[]) {
      commit('setTasks', payload);
    },
  },
  namespaced: true,
};

export default boardModule;
