import { Task } from '@/models/Task';
import { Theme } from '@/models/Theme';
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
    setThemes(state: { theme: Theme[]; }, payload: Task[]) {
      state.theme = payload;
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
